const porkProductionRouter = require("express").Router();
const porkProductionController = require("../../Controllers/AnimalPControllers/PorkProduction-controller");

porkProductionRouter.post("/addPorkProduction", porkProductionController.addPorkProduction);
porkProductionRouter.get("/getPorkProduction", porkProductionController.getAllPorkProduction);
porkProductionRouter.get("/getOnePorkProduction/:id", porkProductionController.getPorkProductionByID);
porkProductionRouter.put("/updatePorkProduction/:id", porkProductionController.updatePorkProduction);
porkProductionRouter.delete("/deletePorkProduction/:id", porkProductionController.deletePorkProduction);

module.exports = porkProductionRouter;