
exports.up = function(knex) {
  return knex.schema.createTable("goal", t => {
    t.integer("user_id").notNull();
    t.datetime("start_time").notNull();
    t.datetime("end_time").notNull();
  });
};
exports.down = function(knex) {
    return knex.schema.dropTable("goal");
};
