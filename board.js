import Cards from "./cards.js"

export default class Board extends Cards {

  _players = []
  _throwAway = []

  set players(players) {
    this._players = players
  }

  get players() {
    return this._players
  }

  set throwAway(throwAway) {
    this._throwAway = throwAway
  }

  get throwAway() {
    return this._throwAway
  }

  constructor() {
    super()
  }

  randomizeCards() {
    for (let i = 0; i < this._cards.length; i++) {
      const card = this._cards.splice(Math.floor(Math.random() * this._cards.length), 1)[0]
      this._cards.push(card)
    }
  }

  giveFiveCards(player) {
    // ge 5 kort från _cards till spelaren
    let cards = this._cards.splice(0, 5)
    player._hand.push(...cards)
  }

  giveTwoCards(player) {
    // ge 2 kort från _cards till spelaren
    let cards = this._cards.splice(0, 2)
    player._hand.push(...cards)
  }

  addThrowAwayToCards() {
    // lägg alla kort i _throwAway i _cards
    let cards = this._throwAway.splice(0, this._throwAway.length)
    this._cards.push(...cards)
  }
  
}










