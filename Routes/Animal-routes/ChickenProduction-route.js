const chickenProductionRouter = require("express").Router();
const chickenProductionController = require("../../Controllers/AnimalPControllers/ChickenProduction-controller");

chickenProductionRouter.post("/addChickenProduction", chickenProductionController.addChickenProduction);
chickenProductionRouter.get("/getChickenProduction", chickenProductionController.getAllChickenProduction);
chickenProductionRouter.get("/getOneChickenProduction/:id", chickenProductionController.getChickenProductionByID);
chickenProductionRouter.put("/updateChickenProduction/:id", chickenProductionController.updateChickenProduction);
chickenProductionRouter.delete("/deleteChickenProduction/:id", chickenProductionController.deleteChickenProduction);

module.exports = chickenProductionRouter;