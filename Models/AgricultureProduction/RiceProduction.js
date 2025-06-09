const mongoose = require('mongoose');

const schema = mongoose.Schema;

const riceProductionSchema = new schema({
    
    District: {
        type: String,
        required: true
    },

    Division: {
        type: String,
        required: true
    },

    RiceType: {
        type: String,
        required: true
    },

    Season: {
        type: String,
        required: true
    },

    CLArea: { // CLArea = cultivated land area
        type: String,
        required: true
    },

    Harvest: {
        type: String,
        required: true
    },

    SurplusDeficit: {
        type: String,
        required: true
    },

    Year: {
        type: String,
        required: true
    },
})

const riceProduction = mongoose.model("RiceProduction", riceProductionSchema);
module.exports = riceProduction;