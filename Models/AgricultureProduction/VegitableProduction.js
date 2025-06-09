const mongoose = require('mongoose');

const schema = mongoose.Schema;

const vegitableProductionSchema = new schema({
    
    District: {
        type: String,
        required: true
    },

    Division: {
        type: String,
        required: true
    },

    VegiType: { //vegiType = vegitable type
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

const vegitableProduction = mongoose.model("VegitableProduction", vegitableProductionSchema);
module.exports = vegitableProduction;