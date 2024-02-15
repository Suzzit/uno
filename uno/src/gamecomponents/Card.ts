import { CardTypes, Colors } from "./Cardtypes";

export default class Card {
    color: Colors | number;
    value: CardTypes | number ;
    cardType: string;

    constructor(color: Colors, value: CardTypes, cardType: string) {
        this.color = color;
        this.value = value;
        this.cardType = cardType;
    }
}