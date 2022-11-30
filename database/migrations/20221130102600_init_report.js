
exports.up = function(knex) {
    return knex.schema.createTable("report", t => {
        t.integer("user_id").notNull();
        t.datetime("start_time").notNull();
        t.datetime("end_time").notNull();
        t.date("date").notNull();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("report");
};
