
export default class Cards {

  constructor() {
    this._cards = []
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

    for (const suit of suits) {
      for (const rank of ranks) {
        this._cards.push({
          name: `${rank} of ${suit}`,
          rank: rank,
          suit: suit
        })
      }
    }
  }

}








