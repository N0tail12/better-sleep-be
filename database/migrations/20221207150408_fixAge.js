exports.up = function(knex) {
    return knex.schema.alterTable('sleeptime', t => {
      t.string("age").alter();
      t.string("sleep_time").alter();
    })
  };
  
  exports.down = function(knex) {
    
  };
  