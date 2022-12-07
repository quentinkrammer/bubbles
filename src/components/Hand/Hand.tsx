import { motion } from "framer-motion";
import { css } from "goober";
import { useRef } from "react";
import { PlayingCards } from "../../types/state";
import PlayingCard from "../PlayingCard/PlayingCard";
import CardsInPlay from "../CardsInPlay/CardsInPlay";

interface Props {
  cards: PlayingCards;
}

export default function Hand({ cards, ...otherProps }: Props) {
  const playingField = useRef<HTMLDivElement | null>(null);

  console.log("playingField", playingField.current);

  const x = playingField ? playingField.current?.offsetLeft : 300;
  const y = playingField ? playingField.current?.offsetTop : 300;

  return (
    <>
      <div className="h-48 w-48"></div>
      <div {...otherProps} className={styles.hand}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{
              translateY: -24,
            }}
            initial={{ opacity: 0, x: 0, y: 448 / 2 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2 }}
            drag
            dragSnapToOrigin
            onDrop={(e) => console.log(e)}
            onDragEnd={(e) => console.log(e)} // dispatch action to remove card from hand
            // add onExit animation to hover onto middle pile
          >
            <PlayingCard value={card.value} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

const styles = {
  hand: css({ display: "flex" }),
  card: css({}),
};
