exports.up = function(knex) {
    return knex.schema.table('schedule', t => {
        t.integer("user_id");
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.table('schedule', t => {
        t.dropColumn("user_id");
      })
  };