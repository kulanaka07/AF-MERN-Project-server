const milkProductionRouter = require("express").Router();
const milkProductionController = require("../../Controllers/AnimalPControllers/MilkProduction-controller");

milkProductionRouter.post("/addMilkProduction", milkProductionController.addMilkProduction);
milkProductionRouter.get("/getMilkProduction", milkProductionController.getAllMilkProduction);
milkProductionRouter.get("/getOneMilkProduction/:id", milkProductionController.getMilkProductionByID);
milkProductionRouter.put("/updateMilkProduction/:id", milkProductionController.updateMilkProduction);
milkProductionRouter.delete("/deleteMilkProduction/:id", milkProductionController.deleteMilkProduction);

module.exports = milkProductionRouter;
