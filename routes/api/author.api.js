const express = require("express");
const router = express.Router();
const AuthorController = require("../../controller/api/author.controller");

/**
 * @swagger
 * /api/login:
 *  post:
 *    tags:
 *      - User
 *    summary: Login
 *    requestBody:
 *      description: User Login
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *            required:
 *                - username
 *                - password
 *    responses:
 *      '200':
 *        description: Login
 */
router.route("/login").post(AuthorController.login);
/**
 * @swagger
 * /logout:
 *  post:
 *    tags:
 *      - User
 *    description: Use to Login
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.route("/logout").post(AuthorController.logout);

module.exports = router;
