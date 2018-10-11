function reverseString (string) { 

    if (string === "") { 
    return "";

    } else { 

       return  reverseString(string.slice(1)) + string[0];
    }


}

console.log(reverseString("doggie"));


// oggie + d 
// 