import { PlayingCards } from "../../types/state";

export type GameState = {
  inPlay: PlayingCards;
  inHand: PlayingCards;
};

enum GameStateActionKinds {
  PlayCard = "PLAY_CARD",
}

type GameStateActions = {
  type: GameStateActionKinds;
  payload: GameState;
};

function handlePlayCard(
  state: GameState,
  {
    payload: { inHand, inPlay },
  }: Extract<GameStateActions, { type: GameStateActionKinds.PlayCard }>
): GameState {
  return state;
}

export function gameStateReducer(
  state: GameState,
  action: GameStateActions
): GameState {
  switch (action.type) {
    case "PLAY_CARD":
      return handlePlayCard(state, action);

    default:
      return state;
  }
}
