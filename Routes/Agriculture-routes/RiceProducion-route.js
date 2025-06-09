const riceProductionRouter = require("express").Router();
const riceProductionController = require("../../Controllers/AgriculturePControllers/RiceProduction-controller");

riceProductionRouter.post("/addRiceProduction", riceProductionController.addRiceProduction);
riceProductionRouter.get("/getRiceProduction", riceProductionController.getAllRiceProduction);
riceProductionRouter.get("/getOneRiceProduction/:id", riceProductionController.getRiceProductionByID);
riceProductionRouter.put("/updateRiceProduction/:id", riceProductionController.updateRiceProduction);
riceProductionRouter.delete("/deleteRiceProduction/:id", riceProductionController.deleteRiceProduction);

module.exports = riceProductionRouter;