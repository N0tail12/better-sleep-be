exports.up = function(knex) {
    return knex.schema.table('goal', t => {
        t.string("date");
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.table('goal', t => {
        t.dropColumn("date");
      })
  };