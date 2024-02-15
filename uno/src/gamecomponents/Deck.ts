import Card from "./Card";
import { Colors, CardTypes } from "./Cardtypes";

export default class Deck{
    deck: Card[] = [];

    constructor() {
        this.deck = this.generateCards()
    }

    private generateCards() {
        // To generate number cards
        for(let color=0; color<4; color++) {
            for(let number=0; number<=9; number++) {
                this.deck.push(new Card(Colors[color], number, "number"))
            }
        }

        // To generate action cards
        for(let color=0; color<4; color++) {
            for(let actions=0; actions<2; actions++) {
                this.deck.push(new Card(Colors[color], CardTypes.Reverse, "reverse"))
                this.deck.push(new Card(Colors[color], CardTypes.Skip, 'skip'))
                this.deck.push(new Card(Colors[color], CardTypes.DrawTwo, 'drawtwo'))
            }
        }

        // To generate wild cards
        for(let wilds=0; wilds<2; wilds++) {
            this.deck.push(new Card(-1, CardTypes.Wild, 'wild'))
            this.deck.push(new Card(-1, CardTypes.WildDrawFour, 'wildd4'))
        }
        return this.deck
    }
}