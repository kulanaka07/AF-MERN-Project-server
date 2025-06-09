const mongoose = require('mongoose');

const schema = mongoose.Schema;

const goatMeatProductionSchema = new schema({
    
    Region: {
        type: String,
        required: true
    },
    
    Division: {
        type: String,
        required: true
    },

    GMPopulation: {  // GM = goat meat
        type: String,
        required: true
    },

    NeedPP: { // pp = per person
        type: String,
        required: true
    },

    ConsuptionPY: { // py = per year
        type: String,
        required: true
    },

    SurplusDeficit: { // of goats 
        type: String,
        required: true
    },

    AvgGWeight: { // G = goat
        type: String,
        required: true
    },

    productionValue: { // amount of Goat to increase production
        type: String,
        required: true
    },
})

const goatMeatProduction = mongoose.model("GoatMeatProduction", goatMeatProductionSchema);
module.exports = goatMeatProduction;