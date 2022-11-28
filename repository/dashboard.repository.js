const knex = require("../config/database");

const getAllItem = () => {
  return knex
    .select(
      "category_id",
      "expiration_date",
      "manufacture_date",
      "stock_code",
      "stock_lot_number",
      "stock_name",
      "stock_price",
      "category_name"
    )
    .from("stock")
    .leftJoin("category", "category_id", "category_code")
    .orderBy("stock_code");
};

const getItemById = id => {
  return knex
    .select(
      "category_id",
      "expiration_date",
      "manufacture_date",
      "stock_code",
      "stock_lot_number",
      "stock_name",
      "stock_price"
    )
    .from("stock")
    .where({ stock_code: id });
};

const addItem = payload => {
  return knex("stock")
    .insert({
      stock_name: payload.stock_name,
      stock_price: payload.stock_price,
      stock_lot_number: payload.stock_lot_number,
      manufacture_date: payload.manufacture_date,
      expiration_date: payload.expiration_date,
      category_id: payload.category_id
    })
    .returning("stock_code");
};

const updateItem = payload => {
  return knex("stock").where({ stock_code: payload.stock_code }).update({
    stock_name: payload.stock_name,
    stock_price: payload.stock_price,
    stock_lot_number: payload.stock_lot_number,
    manufacture_date: payload.manufacture_date,
    expiration_date: payload.expiration_date,
    category_id: payload.category_id
  });
};

const deleteItemById = id => {
  return knex("stock").where({ stock_code: id }).del();
};

module.exports = {
  getAllItem,
  getItemById,
  addItem,
  updateItem,
  deleteItemById
};
