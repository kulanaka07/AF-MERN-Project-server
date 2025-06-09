const goatMilkProductionRouter = require("express").Router();
const goatMilkProductionController = require("../../Controllers/AnimalPControllers/GoatMilkProduction-controller");

goatMilkProductionRouter.post("/addGoatMilkProduction", goatMilkProductionController.addGoatMilkProduction);
goatMilkProductionRouter.get("/getGoatMilkProduction", goatMilkProductionController.getAllGoatMilkProduction);
goatMilkProductionRouter.get("/getOneGoatMilkProduction/:id", goatMilkProductionController.getGoatMilkProductionByID);
goatMilkProductionRouter.put("/updateGoatMilkProduction/:id", goatMilkProductionController.updateGoatMilkProduction);
goatMilkProductionRouter.delete("/deleteGoatMilkProduction/:id", goatMilkProductionController.deleteGoatMilkProduction);

module.exports = goatMilkProductionRouter;