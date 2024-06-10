import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    filePaths: {
        type: [String], // Assuming you're storing file paths as an array of strings
        required: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

const Image = mongoose.model('Image', imageSchema);

export default Image;