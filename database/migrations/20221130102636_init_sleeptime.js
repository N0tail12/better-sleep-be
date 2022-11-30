
exports.up = function(knex) {
    return knex.schema.createTable("sleeptime", t => {
        t.integer("age").notNull();
        t.datetime("sleep_time").notNull();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("sleeptime");
};
