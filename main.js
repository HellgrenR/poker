import Player from "./player.js"
import Board from "./board.js"


let board = new Board()

board.randomizeCards()

console.log(board._cards)



let players = []

players.push(new Player("Slim"))
players.push(new Player("Luke"))



board.giveFiveCards(players[0])
board.giveFiveCards(players[1])

console.log("Slim 5", players[0].hand)
console.log("Luke 5", players[1].hand)

console.log("Cards:", board._cards.length)



players[0].throwTwoCardsByIndex(board, 0, 0)
players[1].throwTwoCardsByIndex(board, 0, 0)

console.log("Slim 3", players[0].hand)
console.log("Luke 3", players[1].hand)
console.log("ThrowAway", board._throwAway)



board.giveTwoCards(players[0])
board.giveTwoCards(players[1])

console.log("Slim 5", players[0].hand)
console.log("Luke 5", players[1].hand)

console.log("Cards:", board._cards.length)



players[0].throwAllCards(board)
players[1].throwAllCards(board)

console.log("Slim 0", players[0].hand)
console.log("Luke 0", players[1].hand)

console.log("ThrowAway", board._throwAway)



board.addThrowAwayToCards()

console.log("ThrowAway", board._throwAway)
console.log("Cards", board._cards.length)



console.log("Cards", board._cards)

board.randomizeCards()

console.log("Cards", board._cards)


