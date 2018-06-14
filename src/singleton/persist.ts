import {Injectable} from '@angular/core';
import { TurnEvent, Game, RecordType, BoardState, MoveSequence } from '@shared/interfaces';
import * as PouchDB from 'pouchdb';
import { Future, tryP } from 'fluture';
import {Utils} from '@singleton/util';
import { union } from 'lodash';

@Injectable()
export class Persistence {

  gameDb: PouchDB.Database;
  player0: PouchDB.Database;
  player1: PouchDB.Database;


  constructor() {
  }

  init() {
    //init databases
    this.gameDb = new PouchDB('http://35.165.4.114:5984/games', {auth:{username:'admin', password:'loveseat'}});
    this.player0 = new PouchDB('http://35.165.4.114:5984/player0', {auth:{username:'admin', password:'loveseat'}});
    this.player1 = new PouchDB('http://35.165.4.114:5984/player1', {auth:{username:'admin', password:'loveseat'}});
  }

  updateMoveSequence(game: Game, turn: TurnEvent): Future<never, BoardState> {
    //write move to players game MoveSequence

    //side effect to update current player's turn
    const gameState = tryP(() => <any>this.gameDb.get(game._id));
    gameState.chain((dbGame: Game) => {
      dbGame.activeTurn = dbGame.activeTurn === 0 ? 1 : 0;
      return tryP(() => this.gameDb.put(dbGame));
    })
    .fork(e => console.error(e), v => v);

    const processTurn = tryP(() => this[turn.player.dbId].get(game._id));
    processTurn
      .chain((moveSeq: MoveSequence) => {
        moveSeq.moves = union(moveSeq.moves, [turn])
        this[turn.player.dbId].put()
      })
      .ap(tryP(() => this[turn.player.dbId].get(game._id)))
      .ap(tryP(() => this[turn.player.dbId === 'player0' ? 'player1' : 'player0'].get(game._id)))
    const turnSequence = ;
    const otherTurnSequence = ;
    //construct a new board state and return as a future

    return Future.of(this.buildBoardState());
  }

  getActiveGame() {

  }

  startGame(isLocal: boolean): Future<never, Game> {
    //gen a new game id
    const gameId = Utils.genId();

    //define a local game
    const newLocalGame: Game = {
      _id: gameId,
      type: RecordType.Game,
      players: [
        {name: 'Christopher Nolan', turnId: 0, dbId: 'player0'},
        {name: 'Alfred Hitchcock', turnId: 1, dbId: 'player1'}],
      activeTurn: 0,
      gameInProgress: true,
      playersReady: ['player0', 'player1']
    };
    localStorage.setItem('activeGame', gameId);
    return Future.of(isLocal ? newLocalGame : newLocalGame);
  }

  setUserReady() {

  }

  completeGame() {
    const activeGameId = localStorage.getItem('activeGame');
  }

  buildBoardState(seq: TurnEvent[], seq2: TurnEvent[]): BoardState {
    return {
      UL: null, UM: null, UR: null,
      ML: null, MM: null, MR: null,
      LL: null, LM: null, LR: null
    }
  }

}
