const beefProductionRouter = require("express").Router();
const beefProductionController = require("../../Controllers/AnimalPControllers/BeefProduction-controller");

beefProductionRouter.post("/addBeefProduction", beefProductionController.addBeefProduction);
beefProductionRouter.get("/getBeefProduction", beefProductionController.getAllBeefProduction);
beefProductionRouter.get("/getOneBeefProduction/:id", beefProductionController.getBeefProductionByID);
beefProductionRouter.put("/updateBeefProduction/:id", beefProductionController.updateBeefProduction);
beefProductionRouter.delete("/deleteBeefProduction/:id", beefProductionController.deleteBeefProduction);

module.exports = beefProductionRouter;
