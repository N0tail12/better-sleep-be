const DashboardRepository = require('../../repository/getDashboard');
const Formatter = require("response-format");

const getDashboard = async (req, res) =>{
    try {
        let id = req.params.id;
        let data = await DashboardRepository.getDashboard(id);
        res.json(Formatter.success(null, data));
    } catch (error) {
        res.json(Formatter.badRequest(error))
    }
}

module.exports = {
    getDashboard
}