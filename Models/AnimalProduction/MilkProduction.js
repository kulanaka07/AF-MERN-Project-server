const mongoose = require('mongoose');

const schema = mongoose.Schema;

const milkProductionSchema = new schema({
    
    Region: {
        type: String,
        required: true
    },
    
    Division: {
        type: String,
        required: true
    },

    CPopulation: {  // C = cattle
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

    SurplusDeficit: { // of milk
        type: String,
        required: true
    },

    MilkProPY: { // MilkProPY = milk production per year
        type: String,
        required: true
    },

    productionValue: { // amount of cattle to increase production
        type: String,
        required: true
    },
})

const milkProduction = mongoose.model("MilkProduction", milkProductionSchema);
module.exports = milkProduction;