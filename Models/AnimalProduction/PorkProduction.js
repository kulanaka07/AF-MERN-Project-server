const mongoose = require('mongoose');

const schema = mongoose.Schema;

const porkProductionSchema = new schema({
    
    Region: {
        type: String,
        required: true
    },
    
    Division: {
        type: String,
        required: true
    },

    PPopulation: {  // P = pig
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

    SurplusDeficit: { // of pig
        type: String,
        required: true
    },

    AvgPWeight: { // p = pig
        type: String,
        required: true
    },

    productionValue: { // amount of pigs to increase production
        type: String,
        required: true
    },
})

const porkProduction = mongoose.model("PorkProduction", porkProductionSchema);
module.exports = porkProduction;

// Region
// Division
// PPopulation
// NeedPP
// ConsuptionPY
// SurplusDeficit
// AvgPWeight
// productionValue