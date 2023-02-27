const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv');
dotenv.config()

const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

//Key From Cloudinary
cloudinary.config({
    cloud_name: cloud_name,
    api_key: api_key,
    api_secret: api_secret,
    
});
                                                                                                     
const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto",
};

const fileUploader = (image) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(image, opts, (error, result) => {

            if (result && result.secure_url) {
                console.log(result.secure_url);
                return resolve(result.secure_url);
            } else if (error) {
                console.log(error.message);
                return reject({ message: error.message });
            }
        });
    });
};

module.exports = fileUploader