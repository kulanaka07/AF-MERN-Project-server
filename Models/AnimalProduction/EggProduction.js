const mongoose = require('mongoose');
const schema = mongoose.Schema;

const eggProductionSchema = new schema({
    
    Region: {
        type: String,
        required: true
    },
    
    Division: {
        type: String,
        required: true
    },

    EPopulation: {  // E = egg
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

    SurplusDeficit: { // of egg
        type: String,
        required: true
    },

    EggProPY: { // ProPY = production per year
        type: String,
        required: true
    },

    productionValue: { // amount of egg to increase production
        type: String,
        required: true
    },
})

const eggProduction = mongoose.model("EggProduction", eggProductionSchema);
module.exports = eggProduction;