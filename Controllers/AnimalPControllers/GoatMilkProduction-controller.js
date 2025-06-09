const GoatMilkProduction = require("../../Models/AnimalProduction/GoatMilkProduction");


//this controller is used to add a new goat milk production.
const addGoatMilkProduction = async (req, res, next) => {
    const { 
        Population,
        District,
        SecretariatDivision, 
        NeedPerPerson, 
        Consuption,
        NeedPerDivision,
        NeedPerYearInMl,
        Production,
        SurplusOrDeficit,
        GoatsPresent,
        AvgGoatMilkProductionPerYear,
        GoatsToIncreaseProduction,
        Year
    } = req.body;

    const newGoatMilkProduction = new GoatMilkProduction({
        Population,
        District,
        SecretariatDivision, 
        NeedPerPerson, 
        Consuption,
        NeedPerDivision,
        NeedPerYearInMl,
        Production,
        SurplusOrDeficit,
        GoatsPresent,
        AvgGoatMilkProductionPerYear,
        GoatsToIncreaseProduction,
        Year,
    });

    newGoatMilkProduction.save().then(() => {
        res.json("Goat Milk production has been added successfully.")
    })
    .catch((error) => {
        console.log(error)
    });
};

//This controller is used to view all the goat milk pruduction.
const getAllGoatMilkProduction = async (re, res, next) => {
    GoatMilkProduction.find().then((goatMilkproduction) => {
        res.json(goatMilkproduction);
    })
    .catch((error) => {
        console.log(error);
    });
};

//This controller is used to get the goat milk production details by ID
const getGoatMilkProductionByID = async (req, res) => {
    let goatMilkProductionID = req.params.id;

    const production = await GoatMilkProduction.findById(goatMilkProductionID).then((production) => {
        res.status(200).send({ status: "Goat Milk production is fetched", production});
    })
    .catch((error) => {
        console.log(error.message);
        res.status(500).send({ status: "error occured when fetching", error: error.message });
    });
};

//This controller is used to update the goat milk production details
const updateGoatMilkProduction = async (req, res, next) => {
    let goatMilkProductionID = req.params.id;

    const { 
        Population,
        District,
        SecretariatDivision, 
        NeedPerPerson, 
        Consuption,
        NeedPerDivision,
        NeedPerYearInMl,
        Production,
        SurplusOrDeficit,
        GoatsPresent,
        AvgGoatMilkProductionPerYear,
        GoatsToIncreaseProduction,
        Year
    } = req.body;

    const updateGoatMilkProduction = {
        Population,
        District,
        SecretariatDivision, 
        NeedPerPerson, 
        Consuption,
        NeedPerDivision,
        NeedPerYearInMl,
        Production,
        SurplusOrDeficit,
        GoatsPresent,
        AvgGoatMilkProductionPerYear,
        GoatsToIncreaseProduction,
        Year
    };

    const updateProduction = await GoatMilkProduction.findOneAndUpdate(goatMilkProductionID, updateGoatMilkProduction).then(() => {
        res.status(200).send({ status: "Goat Milk production is updated successfully!!"})
    })
    .catch((error) => {
        console.log(error);
        res.status(500).send({ status: "Error occured when updating", error: error.message});
    });
};

//This controller is used to delete the goat milk production details.
const deleteGoatMilkProduction  = async (req, res, next) => {
    let goatMilkProductionID = req.params.id;

    await GoatMilkProduction.findOneAndDelete(goatMilkProductionID).then(() => {
        res.status(200).send({ status: "Goat Milk production have been deleted successfully!!"});
    })
    .catch((error) => {
        console.log(error.message);
        res.status(500).send({ status: "Error when deleting the Goat Milk production", error: error.message});
    });
};



exports.addGoatMilkProduction = addGoatMilkProduction;
exports.getAllGoatMilkProduction = getAllGoatMilkProduction;
exports.getGoatMilkProductionByID = getGoatMilkProductionByID;
exports.updateGoatMilkProduction = updateGoatMilkProduction;
exports.deleteGoatMilkProduction = deleteGoatMilkProduction;
