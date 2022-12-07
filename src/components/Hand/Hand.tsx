import { motion } from "framer-motion";
import { css } from "goober";
import { MutableRefObject } from "react";
import { PlayingCards } from "../../types/state";
import PlayingCard from "../PlayingCard/PlayingCard";
import { MouseEvent } from "react";

interface Props {
  cards: PlayingCards;
  cardsInPlayRef: MutableRefObject<HTMLDivElement | null>;
  onDoubleClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function Hand({
  cards,
  cardsInPlayRef,
  onDoubleClick,
  ...otherProps
}: Props) {
  //   const x = cardsInPlayRef ? cardsInPlayRef.current?.offsetLeft : 300;
  //   const y = cardsInPlayRef ? cardsInPlayRef.current?.offsetTop : 300;

  return (
    <>
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
            onDrop={(e) => console.log(e)} // when does his trigger?
            onDragEnd={(e) => console.log(e)} // dispatch action to remove card from hand
            // add onExit animation to hover onto middle pile
            onDoubleClick={onDoubleClick}
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
