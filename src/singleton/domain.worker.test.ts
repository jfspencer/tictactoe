import { DomainWorker } from './domain.worker';
import { inject, TestBed } from '@angular/core/testing';
import { MoveSequence, RecordType } from '../shared/interfaces';


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
  it('determineWinner should return player0 for across the top data', () => {
    const winner = domainWorker.determineWinner(
      player1AcrossBottom,
      [
        {name: 'Christopher Nolan', turnId: 0, dbId: 'player0'},
        {name: 'Alfred Hitchcock', turnId: 1, dbId: 'player1'}
      ]);
    expect(winner.name).toBe('Alfred Hitchcock');
  });
});
