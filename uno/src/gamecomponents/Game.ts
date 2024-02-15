import Deck from "./Deck";
import Card from "./Card";

enum Players {
    "Alice",
    "Hero",
    "Yamada"
}

export default class Game {
    gameDeck: Card[] = new Deck().deck
    players = {}

    constructor() {
        this.players = this.initPlayers()
    }

    private initPlayers () {
        let players = {}
        for (let playrs=0; playrs<3; playrs++) {
            players[Players[playrs]] = []

            for(let r=0; r<7; r++) {
                let ranCard = Math.floor(Math.random() * this.gameDeck.length)
                players[Players[playrs]].push(this.gameDeck[ranCard])
                this.gameDeck.splice(ranCard, 1)
            }
        }

        return players
    }
}