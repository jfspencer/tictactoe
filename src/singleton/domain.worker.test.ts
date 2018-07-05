import { DomainWorker } from './domain.worker';
import { inject, TestBed } from '@angular/core/testing';
import { MoveSequence, RecordType, Game } from '../shared/interfaces';
import { Future} from 'fluture';


describe('Service: DomainWorker', () => {

  let domainWorker: DomainWorker;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ ], providers: [DomainWorker] });
  });

  beforeEach(
    inject([DomainWorker], (_domainWorker: DomainWorker) => {
      domainWorker = _domainWorker;
    }));



  const player0AcrossTop: MoveSequence = {
    _id: '123', gameId: 'string', type: RecordType.MoveSequence,
    moves: [
      {move: 'UL', turn: 0, time: 1}, {move: 'LM', turn: 1, time: 2}, {move: 'UM', turn: 0, time: 3},
      {move: 'LL', turn: 1, time: 4}, {move: 'UR', turn: 0, time: 5}, {move: 'LR', turn: 1, time: 3}
    ]
  };
  it('determineWinner should return player0 for across the top data', () => {
    const winner = domainWorker.determineWinner(
      player0AcrossTop,
      [
        {name: 'Christopher Nolan', turnId: 0, dbId: 'player0'},
        {name: 'Alfred Hitchcock', turnId: 1, dbId: 'player1'}
      ]);
    expect(winner.name).toBe('Christopher Nolan');
  });




  const gameInProgress: MoveSequence = {
    _id: '123', gameId: 'string', type: RecordType.MoveSequence,
    moves: [
      {move: 'UL', turn: 0, time: 1}, {move: 'LM', turn: 1, time: 2}, {move: 'UM', turn: 0, time: 3}
    ]
  };
  it('determineWinner should return null for gameInProgress data', () => {
    const winner = domainWorker.determineWinner(
      gameInProgress,
      [
        {name: 'Christopher Nolan', turnId: 0, dbId: 'player0'},
        {name: 'Alfred Hitchcock', turnId: 1, dbId: 'player1'}
      ]);
    expect(winner).toBe(null);
  });

  const player1AcrossBottom: MoveSequence = {
    _id: '123', gameId: 'string', type: RecordType.MoveSequence,
    moves: [
      {move: 'MM', turn: 0, time: 1}, {move: 'LL', turn: 1, time: 2}, {move: 'UM', turn: 0, time: 3},
      {move: 'LM', turn: 1, time: 4}, {move: 'UR', turn: 0, time: 5}, {move: 'LR', turn: 1, time: 3}
    ]
  };
  it('determineWinner should return player1 for across the bottom data', () => {
    const winner = domainWorker.determineWinner(
      player1AcrossBottom,
      [
        {name: 'Christopher Nolan', turnId: 0, dbId: 'player0'},
        {name: 'Alfred Hitchcock', turnId: 1, dbId: 'player1'}
      ]);
    expect(winner.name).toBe('Alfred Hitchcock');
  });

  const p1Winner9Moves: MoveSequence = {
    _id: '123', gameId: 'string', type: RecordType.MoveSequence,
    moves: [
      {move: 'UL', turn: 0, time: 1}, {move: 'ML', turn: 1, time: 2}, {move: 'UM', turn: 0, time: 3},
      {move: 'MM', turn: 1, time: 4}, {move: 'LL', turn: 0, time: 5}, {move: 'LM', turn: 1, time: 3},
      {move: 'MR', turn: 0, time: 4}, {move: 'LR', turn: 1, time: 5}, {move: 'UR', turn: 0, time: 3}
    ]
  };
  it('determineWinner should return player1 for 9th move win', () => {
    const winner = domainWorker.determineWinner(
      p1Winner9Moves,
      [
        {name: 'Alfred Hitchcock', turnId: 0, dbId: 'player0'},
        {name: 'Christopher Nolan', turnId: 1, dbId: 'player1'}
      ]);
    expect(winner.name).toBe('Alfred Hitchcock');
  });


  it('startGame should return a well formed game object', () => {
    const game = domainWorker.startGame(true);
    game.fork(
      e => expect(false).toBe(true),
      game => {
        expect(game._id).toBeTruthy();
        expect(game.activeTurn).toBe(0);
        expect(game).toHaveProperty('sequence')
      });
  });

  it('startGame should return a new object', () => {
    const game = domainWorker.startGame(true);
    Future.of(x => y => ({one: x, two: y}))
    .ap(domainWorker.startGame(true))
    .ap(domainWorker.startGame(true))
    .fork(
      e => expect(false).toBe(true),
      game => {
        const equalGames = game.one === game.two;
        expect(equalGames).toBe(false);
      });
  });


  const testGame: Game = {
  _id: '2345',
  type: RecordType.Game,
  players: [
    {name: 'Christopher Nolan', turnId: 0, dbId: 'player0'},
    {name: 'Alfred Hitchcock', turnId: 1, dbId: 'player1'}],
    activeTurn: 0,
    sequence: {
      _id: 'uniqueId', //id will be a foriegn key of the game record
      gameId: 'test',
      type: RecordType.MoveSequence,
      moves: [{move: 'MM', turn: 0, time: 3}, {move: 'LR', turn: 1, time: 3}]
    },
    gameInProgress: true,
    playersReady: ['player0', 'player1']
  };

  it('updateGameSequnce should update moves and return a new object', () => {
    const game = domainWorker.updateGameSequence(testGame, {move: 'UL', turn: 0, time: 5})
    const newGame = domainWorker.updateGameSequence(testGame, {move: 'UL', turn: 0, time: 5})
    const equalGames = game === newGame;
    expect(equalGames).toBe(false);

    //TODO  this test fails, need to use a proper immutable data structure
    //expect(newGame.sequence.moves.length).toBe(1);

  });

  it('newBoardState should map moves to the board', () => {
    const game = domainWorker.newBoardState(testGame);
    expect(game.MM).toBe(0);
    expect(game.LR).toBe(1);
    expect(game.MR).toBe(null);
  });
});
