exports.up = function(knex) {
    return knex.schema.alterTable('schedule', t => {
        t.dropColumn('name');
      })
};

exports.down = function(knex) {
  
};
