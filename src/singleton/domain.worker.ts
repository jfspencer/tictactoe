import { Player, MoveSequence, GamePlayers, TurnEvent,  } from '@shared/interfaces';
import { Injectable } from '@angular/core';
import { reduce, union, curry, difference } from 'lodash/fp';
import { Either } from 'monet';


@Injectable()
export class DomainWorker {

  constructor(){}

  determineWinner(moveSeq: MoveSequence, players: GamePlayers): Player | null {
    const playerMoves = reduce((accum, val: TurnEvent) => {
      accum['player' + val.turn] = union(accum['player' + val.turn], [val.move]);
      return accum;
    }, {player0: [], player1: []})(moveSeq.moves);

    const checkPlayerMoves = (moves, won, combo:string[]) => {
      const test = difference(combo, moves)
      return won ? true : test.length === 0};
    const p0 = reduce(curry(checkPlayerMoves)(playerMoves.player0), false)(this.winningCombinations);
    const p1 = reduce(curry(checkPlayerMoves)(playerMoves.player1), false)(this.winningCombinations);
    return (p0 ? Either.Left(players[0]) : Either.Right(p1))
      .flatMap(p1DidWin => p1DidWin ? Either.Left(players[1]) : Either.Right(null))
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

}
