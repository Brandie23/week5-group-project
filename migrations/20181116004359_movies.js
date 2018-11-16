
exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies', (table) => {
        table.increments('id').primary(),
        table.string('category'),
        table.string('title'),
        table.string('director'),
        table.string('release_date')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('movies')
};
