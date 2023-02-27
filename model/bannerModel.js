const mongoose = require('mongoose');
const objectid = mongoose.Types.ObjectId
const bannerSchema = new mongoose.Schema({
    bannerName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,

    },
    status: {
        type: String,
        required: true
    },
    update: {
        type: String,
        required: true
    }
})

module.exports = bannerModel = mongoose.model('BannerData', bannerSchema);