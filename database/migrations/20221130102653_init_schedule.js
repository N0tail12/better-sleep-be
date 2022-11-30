
exports.up = function(knex) {
    return knex.schema.createTable("schedule", t => {
        t.string("name").notNull();
        t.datetime("start_time").notNull();
        t.datetime("end_time").notNull();
        t.text("text").notNull();
        t.boolean("isGoal").notNull();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("schedule");
};
