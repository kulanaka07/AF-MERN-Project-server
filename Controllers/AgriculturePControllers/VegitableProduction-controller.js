const VegitableProduction = require("../../Models/AgricultureProduction/VegitableProduction");

//this controller is used to add a new vegitable production.
const addVegitableProduction = async (req, res, next) => {
  const {
    District,
    Division,
    VegiType,
    Season,
    CLArea,
    Harvest,
    SurplusDeficit,
    Year,
  } = req.body;

  const newVegitableProduction = new VegitableProduction({
    District,
    Division,
    VegiType,
    Season,
    CLArea,
    Harvest,
    SurplusDeficit,
    Year,
  });

  newVegitableProduction
    .save()
    .then(() => {
      res.json("Vegitable production has been added successfully.");
    })
    .catch((error) => {
      console.log(error);
    });
};

//This controller is used to view all the vegitable pruduction.
const getAllVegitableProduction = async (req, res, next) => {
  VegitableProduction.find()
    .then((vegitableproduction) => {
      res.json(vegitableproduction);
    })
    .catch((error) => {
      console.log(error);
    });
};

//This controller is used to get the vegitable production details by ID
const getVegitableProductionByID = async (req, res) => {
  let vegitableProductionID = req.params.id;

  const production = await VegitableProduction.findById(vegitableProductionID)
    .then((production) => {
      res
        .status(200)
        .send({ status: "Vegitable production is fetched", production });
    })
    .catch((error) => {
      console.log(error.message);
      res
        .status(500)
        .send({ status: "error occured when fetching", error: error.message });
    });
};

//This controller is used to update the vegitable production details
const updateVegitableProduction = async (req, res, next) => {
  let vegitableProductionID = req.params.id;

  const {
    District,
    Division,
    VegiType,
    Season,
    CLArea,
    Harvest,
    SurplusDeficit,
    Year,
  } = req.body;

  const updateVegitableProduction = {
    District,
    Division,
    VegiType,
    Season,
    CLArea,
    Harvest,
    SurplusDeficit,
    Year,
  };

  const updateProduction = await VegitableProduction.findByIdAndUpdate(
    vegitableProductionID,
    updateVegitableProduction
  )
    .then(() => {
      res
        .status(200)
        .send({ status: "Vegitable production is updated successfully!!" });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .send({ status: "Error occured when updating", error: error.message });
    });
};

//This controller is used to delete the vegitable production details.
const deleteVegitableProduction = async (req, res, next) => {
  let vegitableProductionID = req.params.id;

  await VegitableProduction.findByIdAndDelete(vegitableProductionID)
    .then(() => {
      res
        .status(200)
        .send({
          status: "vegitable production have been deleted successfully!!",
        });
    })
    .catch((error) => {
      console.log(error.message);
      res
        .status(500)
        .send({
          status: "Error when deleting the vegitable production",
          error: error.message,
        });
    });
};

exports.addVegitableProduction = addVegitableProduction;
exports.getAllVegitableProduction = getAllVegitableProduction;
exports.getVegitableProductionByID = getVegitableProductionByID;
exports.updateVegitableProduction = updateVegitableProduction;
exports.deleteVegitableProduction = deleteVegitableProduction;
