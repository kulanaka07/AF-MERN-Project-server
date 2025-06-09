const goatMeatProductionRouter = require("express").Router();
const goatMeatProductionController = require("../../Controllers/AnimalPControllers/GoatMeatProduction-controller");

goatMeatProductionRouter.post("/addGoatMeatProduction", goatMeatProductionController.addGoatMeatProduction);
goatMeatProductionRouter.get("/getGoatMeatProduction", goatMeatProductionController.getAllGoatMeatProduction);
goatMeatProductionRouter.get("/getOneGoatMeatProduction/:id", goatMeatProductionController.getGoatMeatProductionByID);
goatMeatProductionRouter.put("/updateGoatMeatProduction/:id", goatMeatProductionController.updateGoatMeatProduction);
goatMeatProductionRouter.delete("/deleteGoatMeatProduction/:id", goatMeatProductionController.deleteGoatMeatProduction);

module.exports = goatMeatProductionRouter;