const EggProduction = require("../../Models/AnimalProduction/EggProduction");


//this controller is used to add a new Egg production.
const addEggProduction = async (req, res, next) => {
    const { 
        Population,
        District,
        SecretariatDivision,
        NeedPerPerson,
        NeedAsPerDivision, 
        Consuption,
        NeedPerYear,
        Production,
        SurplusOrDeficit,
        DomesticChickens,
        HensPresent,
        AnnualProductonOfAHen,
        HensToIncreaseProduction,
        Year
    } = req.body;

    const newEggProduction = new EggProduction({
        Population,
        District,
        SecretariatDivision,
        NeedPerPerson,
        NeedAsPerDivision, 
        Consuption,
        NeedPerYear,
        Production,
        SurplusOrDeficit,
        DomesticChickens,
        HensPresent,
        AnnualProductonOfAHen,
        HensToIncreaseProduction,
        Year,
    });

    newEggProduction.save().then(() => {
        res.json("Egg production has been added successfully.")
    })
    .catch((error) => {
        console.log(error)
    });
};

//This controller is used to view all the eeg pruduction.
const getAllEggProduction = async (re, res, next) => {
    EggProduction.find().then((eggproduction) => {
        res.json(eggproduction);
    })
    .catch((error) => {
        console.log(error);
    });
};

//This controller is used to get the egg production details by ID
const getEggProductionByID = async (req, res) => {
    let eggProductionID = req.params.id;

    const production = await EggProduction.findById(eggProductionID).then((production) => {
        res.status(200).send({ status: "Egg production is fetched", production});
    })
    .catch((error) => {
        console.log(error.message);
        res.status(500).send({ status: "error occured when fetching", error: error.message });
    });
};

//This controller is used to update the Egg production details
const updateEggProduction = async (req, res, next) => {
    let eggProductionID = req.params.id;

    const { 
        Population,
        District,
        SecretariatDivision,
        NeedPerPerson,
        NeedAsPerDivision, 
        Consuption,
        NeedPerYear,
        Production,
        SurplusOrDeficit,
        DomesticChickens,
        HensPresent,
        AnnualProductonOfAHen,
        HensToIncreaseProduction,
        Year
    } = req.body;

    const updateBeefProduction = {
        Population,
        District,
        SecretariatDivision,
        NeedPerPerson,
        NeedAsPerDivision, 
        Consuption,
        NeedPerYear,
        Production,
        SurplusOrDeficit,
        DomesticChickens,
        HensPresent,
        AnnualProductonOfAHen,
        HensToIncreaseProduction,
        Year,
    };

    const updateProduction = await EggProduction.findOneAndUpdate(eggProductionID, updateEggProduction).then(() => {
        res.status(200).send({ status: "Egg production is updated successfully!!"})
    })
    .catch((error) => {
        console.log(error);
        res.status(500).send({ status: "Error occured when updating", error: error.message});
    });
};

//This controller is used to delete the egg production details.
const deleteEggProduction  = async (req, res, next) => {
    let eggProductionID = req.params.id;

    await EggProduction.findOneAndDelete(eggProductionID).then(() => {
        res.status(200).send({ status: "Egg production have been deleted successfully!!"});
    })
    .catch((error) => {
        console.log(error.message);
        res.status(500).send({ status: "Error when deleting theEgg production", error: error.message});
    });
};



exports.addEggProduction = addEggProduction;
exports.getAllEggProduction = getAllEggProduction;
exports.getEggProductionByID = getEggProductionByID;
exports.updateEggProduction = updateEggProduction;
exports.deleteEggProduction = deleteEggProduction;


