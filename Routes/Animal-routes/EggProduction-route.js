const eggProductionRouter = require("express").Router();
const eggProductionController = require("../../Controllers/AnimalPControllers/EggProduction-controller");

eggProductionRouter.post("/addEggProduction", eggProductionController.addEggProduction);
eggProductionRouter.get("/getEggProduction", eggProductionController.getAllEggProduction);
eggProductionRouter.get("/getOneEggProduction/:id", eggProductionController.getEggProductionByID);
eggProductionRouter.put("/updateEggProduction/:id", eggProductionController.updateEggProduction);
eggProductionRouter.delete("/deleteEggProduction/:id", eggProductionController.deleteEggProduction);

module.exports = eggProductionRouter;
