
exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies', (table) => {
        table.increments('id').primary(),
        table.string('Catergory'),
        table.string('Title'),
        table.string('Director'),
        table.string('Release_Date')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('movies')
};
