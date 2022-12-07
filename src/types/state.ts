export interface PlayingCard<T extends number = number> {
  value: T;
}

export type PlayingCards<T extends number = number> = Array<PlayingCard<T>>;
