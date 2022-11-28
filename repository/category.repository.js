const knex = require("../config/database");

const getAllCategory = () => {
  return knex.select("*").from("category").orderBy("category_code");
};

const addCategory = name => {
  return knex("category").insert({ category_name: name }).returning("category_code");
};

const updateCategory = payload => {
  return knex("category").where({ category_code: payload.category_code }).update({
    category_name: payload.category_name
  });
};

const deleteCategory = id => {
  return knex("category").where({ category_code: id }).del();
};

module.exports = {
  getAllCategory,
  addCategory,
  updateCategory,
  deleteCategory
};
