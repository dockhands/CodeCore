const StringExtra =  { 

    repeat(string, n) {
        
        let phrase = "";
        for (i=0; i<= n; i++) {
            phrase = phrase +  string;
        }

        return phrase;
      },


      leftPad (string, n) { 

        let output = ""; 
        for (i=0; i<= n; i++) {
            output += " ";
        }
        return output + string;
      },

      rightPad (string, n) { 

        let output = ""; 
        for (i=0; i<= n; i++) {
            output += " ";
        }
        return  string + output + "check out Sam <---";
      }, 

      pad (string, n) { 

        let output = ""; 
        for (i=0; i<= n; i++) {
            output += " ";
        }
        return  output + string + output + "check out Sam <---";
      },

      capitalize (string) { 

        
        console.log("string [0]= " + string[0].toUpperCase());

        firstLetter = string[0].toUpperCase();

        let newWord = firstLetter + string.slice(1);
        console.log("new word" + newWord);
        return newWord; 
      
      }


};



console.log("this is repeat: ", StringExtra.repeat("Sam",5));
console.log("this is leftPad: ", StringExtra.leftPad("Left Sam",25));
console.log("this is right Pad: ", StringExtra.rightPad("Right Sam",25));
console.log("this is Pad: ", StringExtra.pad("Pad Sam",15));
console.log("this is capitalize: ", StringExtra.capitalize("sam"));


 // This method will set the prototype (i.e. __proto__) of
    // `DoggoFighter.prototype` to `Doggo.prototype`.
    // Object.setPrototypeOf(StringExtra.prototype, String.prototype);
    Object.setPrototypeOf(String.prototype, StringExtra);

    let a = "you";

console.log(a.repeat(3)); 

