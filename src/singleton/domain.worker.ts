import { Player, MoveSequence, GamePlayers, Game, TurnEvent, RecordType, BoardState } from '../shared/interfaces';
import { Injectable } from '@angular/core';
import { reduce, union, curry, difference } from 'lodash/fp';
import { Either } from 'monet';
import { Future } from 'fluture';
import { Utils} from './util';
import {cloneDeep, assign} from 'lodash';


@Injectable()
export class DomainWorker {

  constructor(){}

  startGame(isLocal: boolean): Future<never, Game> {
    //gen a new game id
    const gameId = Utils.genId();

    //define a local game
    const newLocalGame: Game = {
    _id: gameId,
    type: RecordType.Game,
    players: [
      {name: 'Chris Nolan', turnId: 0, dbId: 'player0'},
      {name: 'Al Hitchcock', turnId: 1, dbId: 'player1'}],
      activeTurn: 0,
      sequence: {
        _id: Utils.genId(), //id will be a foriegn key of the game record
        gameId: 'test',
        type: RecordType.MoveSequence,
        moves: []
      },
      gameInProgress: true,
      playersReady: ['player0', 'player1']
    };
    localStorage.setItem('activeGame', gameId);
    return Future.of(isLocal ? newLocalGame : newLocalGame);
  }

  //
  updateGameSequence(game: Game, turn: TurnEvent) {
    game.sequence.moves = union(game.sequence.moves, [turn])
    return assign({}, game);
  }

  //provided a game object, generate a new board state for the UI to consume
  newBoardState(game: Game) : BoardState {
    const newBoardState = reduce((boardState, turnEvent: TurnEvent ) => {
      boardState[turnEvent.move] = turnEvent.turn;
      return boardState;
    }, this.buildEmptyBoard())(game.sequence.moves);
    return cloneDeep(newBoardState);
  }

  //compute a winner returning the player, or null to continue
  determineWinner(moveSeq: MoveSequence, players: GamePlayers): Player | null {
    //check to see if more then 9 moves have been made, if yes then exit left with a scratch game
    //otherwise continue right
    return (moveSeq.moves.length >= 9 ? Either.Left({name:'Scratch Game!'}) : Either.Right(null))
      .flatMap(isNull => {
        //reduce the player TurnEvent[] into a string[] for simply winning combo comparison
        //reduce was used over map because reduce provides clear intent on the resulting Type
        // and allows the return type to be sometihng other than an array. in this case an object with 2 []s
        const playerMoves = reduce((accum, val: TurnEvent) => {
          accum['player' + val.turn] = union(accum['player' + val.turn], [val.move]);
          return accum;
        }, {player0: [], player1: []})(moveSeq.moves);

        //function to determine a winning combo
        const checkPlayerMoves = (moves, won, winningCombos:string[]) => {
          //diff player moves against winning combos, if result is greater than 0, the player has won
          const test = difference(winningCombos, moves)
          return won ? true : test.length === 0
        };

        //check player0's move sequence for a winning combo
        const p0 = reduce(curry(checkPlayerMoves)(playerMoves.player0), false)(this.winningCombinations);

        //check player1's move sequence for a winning combo
        const p1 = reduce(curry(checkPlayerMoves)(playerMoves.player1), false)(this.winningCombinations);

        //if player0 won escape to the left, otherwise return player1
        return (p0 ? Either.Left(players[0]) : Either.Right(p1));
      })
      // check player1 for a win, if player1 won, escape to the left, otherwise return isNull
      //signaling a continue to the UI logic
      .flatMap(p1DidWin => p1DidWin ? Either.Left(players[1]) : Either.Right(null))
      //apply catamorph to lift the value out of the either monad with the identity function
      .cata(v => v, v => v);
  }

  //lodash difference accounts for left to right or right to left same with top to bottom and vice versa
  private winningCombinations = [
    ['UL', 'UM', 'UR'], //across the top L to R
    ['ML', 'MM', 'MR'], //across the middle  L to R
    ['LL', 'LM', 'LR'], //across the bottom  L to R
    ['UL', 'ML', 'LL'], //left column top to bottom
    ['UM', 'MM', 'LM'], //middle column top to bottom`
    ['UR', 'MR', 'LR'], //right column top to bottom
    ['UL', 'MM', 'LR'], //top left to bottom right diagnoal
    ['UR', 'MM', 'LL'], //top right to bottom left diagnoal
  ];

  //create a new empty board state
  private buildEmptyBoard(): BoardState {
    return cloneDeep({
      UL: null, UM: null, UR: null,
      ML: null, MM: null, MR: null,
      LL: null, LM: null, LR: null
    })
  }
}
