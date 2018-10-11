class Card { 

    constructor (value, suit) { 
        this.value = value;
        this.suit = suit;
    }

    toString () { 
    if (this.value === 1) {
        this.value = "Ace";
    } else if (this.value === 11) {
        this.value = "Jack";
    } 
    else if (this.value === 12) {
        this.value = "Queen";
    } 
    else if (this.value === 13) {
        this.value = "King";
    } 
        
       let cardName = `Card { ${this.value} of ${this.suit}} `
       
        return cardName;

    }
} 

const aceOfSpades = new Card(1, 'spades');
const tenOfHearts = new Card(10, 'hearts');
const kingOfDiamonds = new Card(13, 'diamonds');

console.log(aceOfSpades);
console.log(aceOfSpades.toString());
console.log(kingOfDiamonds.toString());



class Deck { 

    constructor () { 
       
        this.deck = [];
        let suit = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        
        //this.cards = new Array[52]
        
        for (let i=0; i<=suit.length-1; i++ ) { 
            for (let j=0; j<= values.length-1; j++) { 
                //console.log (values[j], suit[i]); 
                
              this.deck.push(new Card (values[j], suit[i])); 
                //console.log (value[j], suit[i]); 
                //console.log ("this is the card ", Card); 
            }
        }
       //console.log("deck test: ", this.deck);
        //return deck;

    }


    shuffle () { 
        console.log("Hey guys");

        for (let i = 51; i => 0; i-- ) {
            console.log(this.deck[i]);   
            let randomNumber = Math.floor((Math.random() *(i+1)));
            console.log(randomNumber);
            let x = this.deck[i];
            this.deck[i] = this.deck[randomNumber];
            this.deck[randomNumber] = x;   
            }
            console.log(this.deck);
        }
      
    
} 


const deck1 = new Deck();

console.log(deck1.shuffle());
