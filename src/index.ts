import { GopsGame } from './gops'
import { Card, SequenceOfCards } from "./sequenceOfCards";
import { EqualPlayer, RandomPlayer } from "./players";
import { randomSequenceOfCards } from "./randomSequenceOfCards";

const setOfCards: Card[] = [
  new Card('A', 1),
  new Card('2', 2),
  new Card('3', 3),
  new Card('4', 4),
  new Card('5', 5),
  new Card('6', 6),
  new Card('7', 7),
  new Card('8', 8),
  new Card('9', 9),
  new Card('10', 10),
  new Card('J', 11),
  new Card('Q', 12),
  new Card('K', 13)
]

new GopsGame(
  new SequenceOfCards(randomSequenceOfCards(setOfCards)),
  new RandomPlayer(new SequenceOfCards(setOfCards)),
  new EqualPlayer(new SequenceOfCards(setOfCards))
).play()
