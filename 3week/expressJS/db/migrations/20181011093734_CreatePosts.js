
exports.up = function(knex, Promise) {
  
//when creating migrations you must always RETURN the result o your 
// migration code. ALWAYS!

return knex.schema.createTable("posts", table => {
//CREATE TABLE "posts" (   ==== > start adding my columns
    table.increments("id"); // "id" SERIAL ... in sql
    table.string("title"); // "title" VARCHAR(255) ... in sql
    table.text("content"); // "content" TEXT... in sql
    table.integer("viewCount"); // "viewCount" INTEGER 
    table.timestamp("createdAt").defaultTo(knex.fn.now());
})

};


// exports down is like a roll back
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("posts");
};


// similar set up to: 
// module.exports = { 
//     up: function... 
//     down: function. . 
// }