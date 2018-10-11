
function insult(name) { 

let insults = [", you shmuck", ", you turd dingler", ", you nerf herder"]

let randomNum = Math.floor((Math.random() * 2));

return console.log(`${name}` + insults[randomNum]);
    
}

//let insultee = "Bob";
insult("Bob");

const daeny = { 
firstName: "Daenerys",
lastName: "Targ",
titles: ["Queen", "Khaleesi"]

};

daeny["titles"]; 

// cmd+ D, 
// ctrl g, combines all lines together