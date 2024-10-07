import type {ICard} from "@/types/card.types.ts";

type TPlayer = 'player' | 'opponent';

interface IGameCard extends ICard {
    id: number;
    isOnBoard: boolean;
    canAttack: boolean;
}

interface IHero{
    deck: IGameCard[];
    health: number;
    mana: number;
}
export interface IGameStore {
    player: IHero;
    opponent: IHero;
    currentTurn: TPlayer;
    startGame: () => void;
    endTurn: () => void;
    playCard: (card: IGameCard) => void;
    attackCard: (attackerId: number, targetId: number) => void;
    attackHero: (attackerId: number) => void;
}