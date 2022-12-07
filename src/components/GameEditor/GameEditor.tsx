import { useReducer } from "react";
import { BaseProps } from "../../types/baseProps";
import CardsInPlay from "../CardsInPlay/CardsInPlay";
import Hand from "../Hand/Hand";
import { GameState, gameStateReducer } from "./gameState";

interface Props extends BaseProps {}
export default function GameEditor({ ...otherProps }: Props) {
  const initialGameState: GameState = {
    inPlay: [],
    inHand: [{ value: 1 }, { value: 2 }, { value: 3 }],
  };

  const [{ inHand, inPlay }, dispatch] = useReducer(
    gameStateReducer,
    initialGameState
  );

  return (
    <div {...otherProps}>
      <CardsInPlay cards={inPlay} />
      <Hand cards={inHand} />
    </div>
  );
}
