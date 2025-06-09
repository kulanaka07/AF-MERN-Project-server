const PorkProduction = require("../../Models/AnimalProduction/PorkProduction");


//this controller is used to add a new pork production.
const addPorkProduction = async (req, res, next) => {
    const { 
        Region,
        Division,
        PPopulation,
        NeedPP,
        ConsuptionPY,
        SurplusDeficit,
        AvgPWeight,
        productionValue
    } = req.body;

    const newPorkProduction = new PorkProduction({
        Region,
        Division,
        PPopulation,
        NeedPP,
        ConsuptionPY,
        SurplusDeficit,
        AvgPWeight,
        productionValue
    });

    newPorkProduction.save().then(() => {
        res.json("Pork production has been added successfully.")
    })
    .catch((error) => {
        console.log(error)
    });
};

//This controller is used to view all the pork pruduction.
const getAllPorkProduction = async (re, res, next) => {
    PorkProduction.find().then((porkproduction) => {
        res.json(porkproduction);
    })
    .catch((error) => {
        console.log(error);
    });
};

//This controller is used to get the pork production details by ID
const getPorkProductionByID = async (req, res) => {
    let porkProductionID = req.params.id;

    const production = await PorkProduction.findById(porkProductionID).then((production) => {
        res.status(200).send({ status: "Pork production is fetched", production});
    })
    .catch((error) => {
        console.log(error.message);
        res.status(500).send({ status: "error occured when fetching", error: error.message });
    });
};

//This controller is used to update the pork production details
const updatePorkProduction = async (req, res, next) => {
    let porkProductionID = req.params.id;

    const { 
        Region,
        Division,
        PPopulation,
        NeedPP,
        ConsuptionPY,
        SurplusDeficit,
        AvgPWeight,
        productionValue
    } = req.body;

    const updateBeefProduction = {
        Region,
        Division,
        PPopulation,
        NeedPP,
        ConsuptionPY,
        SurplusDeficit,
        AvgPWeight,
        productionValue
    };

    const updateProduction = await PorkProduction.findOneAndUpdate(porkProductionID, updatePorkProduction).then(() => {
        res.status(200).send({ status: "Pork production is updated successfully!!"})
    })
    .catch((error) => {
        console.log(error);
        res.status(500).send({ status: "Error occured when updating", error: error.message});
    });
};

//This controller is used to delete the pork production details.
const deletePorkProduction  = async (req, res, next) => {
    let porkProductionID = req.params.id;

    await PorkProduction.findOneAndDelete(porkProductionID).then(() => {
        res.status(200).send({ status: "Pork production have been deleted successfully!!"});
    })
    .catch((error) => {
        console.log(error.message);
        res.status(500).send({ status: "Error when deleting the pork production", error: error.message});
    });
};



exports.addPorkProduction = addPorkProduction;
exports.getAllPorkProduction = getAllPorkProduction;
exports.getPorkProductionByID = getPorkProductionByID;
exports.updatePorkProduction = updatePorkProduction;
exports.deletePorkProduction = deletePorkProduction;


