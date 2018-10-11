


exports.up = function(knex, Promise) {
    return knex.schema.table('posts', function(t) {
        t.string('imageUrl');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('posts', function(t) {
        t.dropColumn('imageUrl');
    });
};


