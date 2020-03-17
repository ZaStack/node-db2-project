exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.integer('VIN')
            .notNull()
            .unique();
        tbl.text('make').notNull();
        tbl.text('model').notNull();
        tbl.integer('mileage').notNull();
        tbl.text('title');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
