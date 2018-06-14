export type Move =
  'UL' | 'UM' | 'UR' |
  'ML' | 'MM' | 'MR' |
  'LL' | 'LM' | 'LR';

export  interface GameState {
    boardState : BoardState;
    gameId: string;
    players: GamePlayers;
    activeTurn: number;
}

export interface BoardState {
  UL: number; UM: number; UR: number;
  ML: number; MM: number; MR: number;
  LL: number; LM: number; LR: number;
}

export interface TurnEvent {
  move: Move,
  player: Player
}

export interface GamePlayers {
  [index: number]: Player;
}

export interface Player {
  name: string;
  turnId: number;
  dbId: string;
}
