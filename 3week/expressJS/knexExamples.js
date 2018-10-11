const knex = require("./db/client");

// // Exercise: Inserting into Posts 

// knex 
// .insert ([ 

// {title: "Top 10 Rugs", content: "this is a great rug!"},
// {title: "Top 10 Hugs", content: "this is a great hug!"},
// {title: "Top 10 Lugs", content: "this is a great lug!"}

// ])
// .into("posts")
// .returning("*")
// //To read the data from the doing the query, you must access in the callback
// // passed to .then (ie "Data"). It will be the callback's first and only 
// // argument. 
// .then(data => { 
//     console.log("insertion complete!");
//     // When writing a script that should run once, you should end the knex 
//     // connect with the folllowing 
//     console.log(data);
//     knex.destroy();
// });

knex 
.select("*")
.from("posts")
.whereRaw(`"createdAt" > now () - interval '2 months'` )
.orderBy("createdAt", "desc")
.then(data=> { 
    console.log(data);
    knex.destroy();
});

// knex 
// .select("*")
// .from("posts")
// .where("title", "ilike", " %e%")
// .then(data=> { `
//     console.log(data);`
//     knex.destroy();
// });