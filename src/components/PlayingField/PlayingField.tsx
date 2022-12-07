import { forwardRef } from "react";
import PlayingCard from "../PlayingCard/PlayingCard";

interface PlayingFieldProps {
  playedCards: Array<Parameters<typeof PlayingCard>[0]>;
}
const PlayingField = forwardRef<HTMLDivElement, PlayingFieldProps>(
  ({ playedCards, ...otherProps }, ref) => {
    return (
      <div
        ref={ref}
        {...otherProps}
        className="h-64 w-48 rounded-md border border-white"
      >
        {playedCards.map((playedCard, index) => {
          return <PlayingCard key={index} value={playedCard.value} />;
        })}
      </div>
    );
  }
);
export default PlayingField;
