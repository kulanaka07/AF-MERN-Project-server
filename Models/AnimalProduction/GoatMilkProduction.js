const mongoose = require('mongoose');

const schema = mongoose.Schema;

const goatMilkProductionSchema = new schema({
    
    Region: {
        type: String,
        required: true
    },
    
    Division: {
        type: String,
        required: true
    },

    GPopulation: {  // G = goat
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

    SurplusDeficit: { // of goat milk
        type: String,
        required: true
    },

    GMProPY: { // GMProPY = goat milk production per year
        type: String,
        required: true
    },

    productionValue: { // amount of goats to increase production
        type: String,
        required: true
    },
})

const goatMilkProduction = mongoose.model("GoatMilkProduction", goatMilkProductionSchema);
module.exports = goatMilkProduction;