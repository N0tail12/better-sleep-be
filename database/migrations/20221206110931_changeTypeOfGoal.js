exports.up = function(knex) {
  return knex.schema.alterTable('goal', t => {
    t.string("start_time").alter();
    t.string("end_time").alter();
  })
};

exports.down = function(knex) {
  
};
