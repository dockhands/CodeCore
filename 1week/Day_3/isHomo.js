


array1= [1,  {name: 'Charles'}, 'bob'];
array2= [1, 2, 3];
array3= [{name: 'Charles'}, 'Xavier'];

function isHomo (array)  { 

    for (let i=0; i<array.length; i++) {
        
        console.log("this is array types " + typeof array[i]);
       
        for (let j=1; j<array.length; j++) {
            console.log("this is array types 2nd round " + typeof array[j]);

            if (!(typeof array[i] === typeof array[j])){
                console.log("we have a mismatch");
            }

      }
    }

} 


isHomo(array3);



