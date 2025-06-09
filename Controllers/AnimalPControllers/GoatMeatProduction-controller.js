const GoatMeatProduction = require("../../Models/AnimalProduction/GoatMeatProduction");


//this controller is used to add a new goat meat production.
const addGoatMeatProduction = async (req, res, next) => {
    const { 
        Population,
        District,
        SecretariatDivision, 
        NeedPerPerson, 
        Consuption,
        NeedPerDivision,
        NeedPerYearInKg,
        NeedPerYearInTons,
        Production,
        SurplusOrDeficit,
        GoatsPresent,
        AvgWeightOfGoat,
        MeatPercentageFromWeight,
        GoatsToIncreaseProduction,
        Year
    } = req.body;

    const newGoatMeatProduction = new GoatMeatProduction({
        Population,
        District,
        SecretariatDivision, 
        NeedPerPerson, 
        Consuption,
        NeedPerDivision,
        NeedPerYearInKg,
        NeedPerYearInTons,
        Production,
        SurplusOrDeficit,
        GoatsPresent,
        AvgWeightOfGoat,
        MeatPercentageFromWeight,
        GoatsToIncreaseProduction,
        Year,
    });

    newGoatMeatProduction.save().then(() => {
        res.json("Goat Meat production has been added successfully.")
    })
    .catch((error) => {
        console.log(error)
    });
};

//This controller is used to view all the goat meat pruduction.
const getAllGoatMeatProduction = async (re, res, next) => {
    GoatMeatProduction.find().then((goatMeatproduction) => {
        res.json(goatMeatproduction);
    })
    .catch((error) => {
        console.log(error);
    });
};

//This controller is used to get the goat meat production details by ID
const getGoatMeatProductionByID = async (req, res) => {
    let goatMeatProductionID = req.params.id;

    const production = await GoatMeatProduction.findById(goatMeatProductionID).then((production) => {
        res.status(200).send({ status: "Goat Meat production is fetched", production});
    })
    .catch((error) => {
        console.log(error.message);
        res.status(500).send({ status: "error occured when fetching", error: error.message });
    });
};

//This controller is used to update the goat meat production details
const updateGoatMeatProduction = async (req, res, next) => {
    let goatMeatProductionID = req.params.id;

    const { 
        Population,
        District,
        SecretariatDivision, 
        NeedPerPerson, 
        Consuption,
        NeedPerDivision,
        NeedPerYearInKg,
        NeedPerYearInTons,
        Production,
        SurplusOrDeficit,
        GoatsPresent,
        AvgWeightOfGoat,
        MeatPercentageFromWeight,
        GoatsToIncreaseProduction,
        Year
    } = req.body;

    const updateGoatMeatProduction = {
        Population,
        District,
        SecretariatDivision, 
        NeedPerPerson, 
        Consuption,
        NeedPerDivision,
        NeedPerYearInKg,
        NeedPerYearInTons,
        Production,
        SurplusOrDeficit,
        GoatsPresent,
        AvgWeightOfGoat,
        MeatPercentageFromWeight,
        GoatsToIncreaseProduction,
        Year,
    };

    const updateProduction = await GoatMeatProduction.findOneAndUpdate(goatMeatProductionID, updateGoatMeatProduction).then(() => {
        res.status(200).send({ status: "Goat Meat production is updated successfully!!"})
    })
    .catch((error) => {
        console.log(error);
        res.status(500).send({ status: "Error occured when updating", error: error.message});
    });
};

//This controller is used to delete the goat meat production details.
const deleteGoatMeatProduction  = async (req, res, next) => {
    let goatMeatProductionID = req.params.id;

    await GoatMeatProduction.findOneAndDelete(goatMeatProductionID).then(() => {
        res.status(200).send({ status: "Goat Meat production have been deleted successfully!!"});
    })
    .catch((error) => {
        console.log(error.message);
        res.status(500).send({ status: "Error when deleting the Goat Meat production", error: error.message});
    });
};



exports.addGoatMeatProduction = addGoatMeatProduction;
exports.getAllGoatMeatProduction = getAllGoatMeatProduction;
exports.getGoatMeatProductionByID = getGoatMeatProductionByID;
exports.updateGoatMeatProduction = updateGoatMeatProduction;
exports.deleteGoatMeatProduction = deleteGoatMeatProduction;
