const express = require("express");
const router = express.Router();
const DashboardController = require("../../controller/api/getDashboard.controller");

/**
 * @swagger
 * /api/dashboard:
 *  get:
 *    tags:
 *      - DashBoard
 *    security:
 *      - bearerAuth: []
 *    summary: Get Report DashBoard
 *    parameters:
 *      - in: query
 *        name: user_id
 *        schema:
 *          type: integer
 *        description: User id
 *    responses:
 *      '200':
 *        description: Report Dashboard
 */
router.route("/dashboard").get(DashboardController.GetDashboardReport);
/**
 * @swagger
 * /api/goal:
 *  get:
 *    tags:
 *      - DashBoard
 *    security:
 *      - bearerAuth: []
 *    summary: Get Goal DashBoard
 *    parameters:
 *      - in: query
 *        name: user_id
 *        schema:
 *          type: integer
 *        description: User id
 *    responses:
 *      '200':
 *        description: Goal Dashboard
 */
router.route("/goal").get(DashboardController.GetGoal);
/**
 * @swagger
 * /api/update-goal/{:id}:
 *  put:
 *    tags:
 *      - DashBoard
 *    security:
 *      - bearerAuth: []
 *    summary: Update Goal
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        description: User id
 *    requestBody:
 *      description: Goal Time
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              start_time:
 *                type: string
 *              end_time:
 *                type: string
 *            required:
 *                - start_time
 *                - end_time
 *    responses:
 *      '200':
 *        description: Update Goal
 */
router.route("/update-goal/:id").put(DashboardController.updateGoalTime);

module.exports = router;
