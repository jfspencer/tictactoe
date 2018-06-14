export  interface GameState {
    UL: string; UM: string; UR: string;
    ML: string; MM: string; MR: string;
    LL: string; LM: string; LR: string;
    GameId: string;
    players: Players;
    activeTurn: number;
}

export interface Players {
  [index: number]: {name: string, turnId: number, dbId: string};
}
