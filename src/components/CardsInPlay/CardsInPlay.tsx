import { forwardRef } from "react";
import { PlayingCards } from "../../types/state";
import PlayingCard from "../PlayingCard/PlayingCard";

interface Props {
  cards: PlayingCards;
}
const CardsInPlay = forwardRef<HTMLDivElement, Props>(
  ({ cards, ...otherProps }, ref) => {
    return (
      <div
        ref={ref}
        {...otherProps}
        className="h-64 w-48 rounded-md border border-white"
      >
        {cards.map((card, index) => {
          return <PlayingCard key={index} value={card.value} />;
        })}
      </div>
    );
  }
);
export default CardsInPlay;
