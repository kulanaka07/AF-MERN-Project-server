const MilkProduction = require("../../Models/AnimalProduction/MilkProduction");


//this controller is used to add a new milk production.
const addMilkProduction = async (req, res, next) => {
    const { 
        Population,
        District,
        SecretariatDivision, 
        NeedPerPerson, 
        Consuption,
        NeedPerDay,
        NeedPerYearInMl,
        Production,
        SurplusOrDeficit,
        AvgWeightOfCow,
        AvgMilkProductionPerYear,
        CowsPresent,
        CowsToIncreaseProduction,
        Year
    } = req.body;

    const newMilkProduction = new MilkProduction({
        Population,
        District,
        SecretariatDivision, 
        NeedPerPerson, 
        Consuption,
        NeedPerDay,
        NeedPerYearInMl,
        Production,
        SurplusOrDeficit,
        AvgWeightOfCow,
        AvgMilkProductionPerYear,
        CowsPresent,
        CowsToIncreaseProduction,
        Year,
    });

    newMilkProduction.save().then(() => {
        res.json("Milk production has been added successfully.")
    })
    .catch((error) => {
        console.log(error)
    });
};

//This controller is used to view all the milk pruduction.
const getAllMilkProduction = async (re, res, next) => {
    MilkProduction.find().then((milkproduction) => {
        res.json(milkproduction);
    })
    .catch((error) => {
        console.log(error);
    });
};

//This controller is used to get the milk production details by ID
const getMilkProductionByID = async (req, res) => {
    let milkProductionID = req.params.id;

    const production = await MilkProduction.findById(milkProductionID).then((production) => {
        res.status(200).send({ status: "Milk production is fetched", production});
    })
    .catch((error) => {
        console.log(error.message);
        res.status(500).send({ status: "error occured when fetching", error: error.message });
    });
};

//This controller is used to update the milk production details
const updateMilkProduction = async (req, res, next) => {
    let milkProductionID = req.params.id;

    const { 
        Population,
        District,
        SecretariatDivision,  
        NeedPerPerson, 
        Consuption,
        NeedPerDay,
        NeedPerYearInMl,
        Production,
        SurplusOrDeficit,
        AvgWeightOfCow,
        AvgMilkProductionPerYear,
        CowsPresent,
        CowsToIncreaseProduction,
        Year
    } = req.body;

    const updateMilkProduction = {
        Population,
        District,
        SecretariatDivision,  
        NeedPerPerson, 
        Consuption,
        NeedPerDay,
        NeedPerYearInMl,
        Production,
        SurplusOrDeficit,
        AvgWeightOfCow,
        AvgMilkProductionPerYear,
        CowsPresent,
        CowsToIncreaseProduction,
        Year,
    };

    const updateProduction = await MilkProduction.findOneAndUpdate(milkProductionID, updateMilkProduction).then(() => {
        res.status(200).send({ status: "Milk production is updated successfully!!"})
    })
    .catch((error) => {
        console.log(error);
        res.status(500).send({ status: "Error occured when updating", error: error.message});
    });
};

//This controller is used to delete the milk production details.
const deleteMilkProduction  = async (req, res, next) => {
    let milkProductionID = req.params.id;

    await MilkProduction.findOneAndDelete(milkProductionID).then(() => {
        res.status(200).send({ status: "Milk production have been deleted successfully!!"});
    })
    .catch((error) => {
        console.log(error.message);
        res.status(500).send({ status: "Error when deleting the Milk production", error: error.message});
    });
};



exports.addMilkProduction = addMilkProduction;
exports.getAllMilkProduction = getAllMilkProduction;
exports.getMilkProductionByID = getMilkProductionByID;
exports.updateMilkProduction = updateMilkProduction;
exports.deleteMilkProduction = deleteMilkProduction;
