const vegitableProductionRouter = require("express").Router();
const vegitableProductionController = require("../../Controllers/AgriculturePControllers/VegitableProduction-controller");

vegitableProductionRouter.post("/addVegitableProduction", vegitableProductionController.addVegitableProduction);
vegitableProductionRouter.get("/getVegitableProduction", vegitableProductionController.getAllVegitableProduction);
vegitableProductionRouter.get("/getOneVegitableProduction/:id", vegitableProductionController.getVegitableProductionByID);
vegitableProductionRouter.put("/updateVegitableProduction/:id", vegitableProductionController.updateVegitableProduction);
vegitableProductionRouter.delete("/deleteVegitableProduction/:id", vegitableProductionController.deleteVegitableProduction);

module.exports = vegitableProductionRouter;