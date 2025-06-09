const RiceProduction = require("../../Models/AgricultureProduction/RiceProduction");


//this controller is used to add a new rice production.
const addRiceProduction = async (req, res, next) => {
    const { 
        District,
        Division,
        RiceType, 
        Season,
        CLArea,
        Harvest,
        SurplusDeficit,
        Year        
    } = req.body;

    const newRiceProduction = new RiceProduction({
        District,
        Division,
        RiceType, 
        Season,
        CLArea,
        Harvest,
        SurplusDeficit,
        Year,
    });

    newRiceProduction.save().then(() => {
        res.json("Rice production has been added successfully.")
    })
    .catch((error) => {
        console.log(error)
    });
};

//This controller is used to view all the Rice pruduction.
const getAllRiceProduction = async (req, res, next) => {
    RiceProduction.find().then((riceproduction) => {
        res.json(riceproduction);
    })
    .catch((error) => {
        console.log(error);
    });
};

//This controller is used to get the rice production details by ID
const getRiceProductionByID = async (req, res) => {
    let riceProductionID = req.params.id;

    const production = await RiceProduction.findById(riceProductionID).then((production) => {
        res.status(200).send({ status: "Rice production is fetched", production});
    })
    .catch((error) => {
        console.log(error.message);
        res.status(500).send({ status: "error occured when fetching", error: error.message });
    });
};

//This controller is used to update the rice production details
const updateRiceProduction = async (req, res, next) => {
    let riceProductionID = req.params.id;

    const { 
        District,
        Division,
        RiceType, 
        Season,
        CLArea,
        Harvest,
        SurplusDeficit,
        Year     
    } = req.body;

    const updateRiceProduction = {
        District,
        Division,
        RiceType, 
        Season,
        CLArea,
        Harvest,
        SurplusDeficit,
        Year,
    };

    const updateProduction = await RiceProduction.findByIdAndUpdate(riceProductionID, updateRiceProduction).then(() => {
        res.status(200).send({ status: "Rice production is updated successfully!!"})
    })
    .catch((error) => {
        console.log(error);
        res.status(500).send({ status: "Error occured when updating", error: error.message});
    });
};

//This controller is used to delete the rice production details.
const deleteRiceProduction  = async (req, res, next) => {
    let riceProductionID = req.params.id;

    await RiceProduction.findByIdAndDelete(riceProductionID).then(() => {
        res.status(200).send({ status: "Rice production have been deleted successfully!!"});
    })
    .catch((error) => {
        console.log(error.message);
        res.status(500).send({ status: "Error when deleting the rice production", error: error.message});
    });
};



exports.addRiceProduction = addRiceProduction;
exports.getAllRiceProduction = getAllRiceProduction;
exports.getRiceProductionByID = getRiceProductionByID;
exports.updateRiceProduction = updateRiceProduction;
exports.deleteRiceProduction = deleteRiceProduction;