exports.up = function(knex) {
  return knex.schema.createTable("user", t =>{
    t.string("fullname").notNull();
    t.string("email").notNull();
    t.string("image").notNull();
    t.integer("age").notNull();
    t.increments("user_id").primary();
    t.string("password").notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("user");
};
