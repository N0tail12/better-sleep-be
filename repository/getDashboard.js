const knex = require("../config/database");

const getDashboardDetail = id => {
    return knex('report').join('goal','report.user_id','=','goal.user_id').select('*').where({ user_id : id});
};


module.exports = {
    getDashboardDetail
};
  