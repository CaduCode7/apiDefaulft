import mongoose from 'mongoose';

const customerModel = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

export default customerModel;