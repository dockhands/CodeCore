function Vector (x,y,z) {
    // When a function is used as a constructor,
      // its `this` is an empty object that is an instance
      // of that constructor.
this.x = x;
this.y = y;
this.z = z;

 this.plus = function(inputVector) {
    
    let outputVector = new Vector;
    outputVector.x = this.x + inputVector.x;
    outputVector.y = this.y + inputVector.y;
    outputVector.z = this.z + inputVector.z;
    
    
    return outputVector;
  };


 this.minus = function(inputVector) {
    
    let outputVector = new Vector;
    outputVector.x = this.x - inputVector.x;
    outputVector.y = this.y - inputVector.y;
    outputVector.z = this.z - inputVector.z;
    
    
    return outputVector;
  };


  this.magnitude = function() {

    magnitudeValue =  Math.sqrt (((this.x)**2) +((this.y)**2) +((this.z)**2));
   
    return magnitudeValue;
  };


  //a2 = x2 + y2 + z2 

}

let v1 = new Vector (4,4,0);
let v2 = new Vector (1,2,2);


//console.log("Get value of new Plus", v1.plus(2,2,2));
console.log("V1 = ", v1);
console.log("V2 = ", v2);

console.log("Get value of new v1 + v2", v1.plus(v2));
console.log("Get value of new v1 + v2", v2.plus(v1));

console.log("Get value of new v1 - v2", v1.minus(v2));
console.log("Get value of new v1 - v2", v2.minus(v1));

console.log("Magnitude v1 = ", v1.magnitude());
console.log("Magnitude v2 = ", v2.magnitude());
/////////////////////////

class Vector2 { 

    constructor (x,y,z) { 
       
        this.x = x;
        this.y = y;
        this.z = z;
    }

    plus (inputVector) { 
        let outputVector = new Vector;
        outputVector.x = this.x + inputVector.x;
        outputVector.y = this.y + inputVector.y;
        outputVector.z = this.z + inputVector.z;
          
        return outputVector;
    }

    minus (inputVector) {
    
        let outputVector = new Vector;
        outputVector.x = this.x - inputVector.x;
        outputVector.y = this.y - inputVector.y;
        outputVector.z = this.z - inputVector.z;
        
        return outputVector;
    } 

   magnitude () {

        magnitudeValue =  Math.sqrt (((this.x)**2) +((this.y)**2) +((this.z)**2));
       
        return magnitudeValue;
      }
    

  }


console.log("=============");
  console.log("TESTING CLASS NOW");
  //console.log("Get value of new Plus", v1.plus(2,2,2));
console.log("V1 = ", v1);
console.log("V2 = ", v2);

console.log("Get value of new v1 + v2", v1.plus(v2));
console.log("Get value of new v1 + v2", v2.plus(v1));

console.log("Get value of new v1 - v2", v1.minus(v2));
console.log("Get value of new v1 - v2", v2.minus(v1));

console.log("Magnitude v1 = ", v1.magnitude());
console.log("Magnitude v2 = ", v2.magnitude());