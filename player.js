
export default class Player {

  _hand = []

  constructor(name) {
    this.name = name
  }

  set hand(hand) {
    this._hand = hand
  }

  get hand() {
    return this._hand
  }

  throwTwoCardsByIndex(board, index1, index2) {
    // Problem, tar bort första indexen och sedan skjuts listan ner ett steg och index2 missar
    let thrown1 = this._hand.splice(index1, 1)
    let thrown2 = this._hand.splice(index2, 1)

    board._throwAway.push(...thrown1.concat(thrown2))
  }

  throwAllCards(board) {
    let thrown = this._hand.splice(0, this._hand.length)
    board._throwAway.push(...thrown)
  }

}








