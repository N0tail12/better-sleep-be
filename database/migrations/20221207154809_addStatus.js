exports.up = function(knex) {
    return knex.schema.table('user', t => {
      t.integer("status");
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.table('user', t => {
        t.dropColumn("status");
      })
  };