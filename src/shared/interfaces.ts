//valid moves
export type Move =
  'UL' | 'UM' | 'UR' |
  'ML' | 'MM' | 'MR' |
  'LL' | 'LM' | 'LR';

export enum RecordType {
  Player = 'player',
  Game = 'game',
  MoveSequence = 'move-sequence'
}

/**
Each game is made up of a Game record and two MoveSequence records (one for each player)
a player writes to their own move sequence record and reads from the other players.
**/

export interface Game {
    _id: string;
    _rev?: string;
    type: RecordType.Game;
    players: GamePlayers;
    activeTurn: number;
    gameInProgress: boolean;
    playersReady: string[];
}

export interface MoveSequence {
  _id: string; //id will be a foriegn key of the game record
  gameId: string;
  type: RecordType.MoveSequence;
  moves: TurnEvent[];
}

//this is a generated state to support the game-board component UI
export interface BoardState {
  UL: number; UM: number; UR: number;
  ML: number; MM: number; MR: number;
  LL: number; LM: number; LR: number;
}

//particle supporting the MoveSequence Type and other UI elements
export interface TurnEvent {
  move: Move;
  player: Player;
  time: number;
}

export interface GamePlayers {
  [index: number]: Player;
}

export interface Player {
  name: string;
  turnId: number;
  dbId: string;
}
