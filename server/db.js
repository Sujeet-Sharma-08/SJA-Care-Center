const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async function() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('DATABASE CONNECTED');
    } catch (error) {
        console.error('DATABASE NOT CONNECTED', error);
        process.exit(1);
    }
};

const InputSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
    },
    services: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const SubscriptionEmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true 
    },
    subscribedAt: {
        type: Date,
        default: Date.now
    }
});

const InputModelSJA = mongoose.model('InputModelSJA', InputSchema);
const SubscriptionEmailModel = mongoose.model('SubscriptionEmailModel', SubscriptionEmailSchema);

module.exports = { connectDB, InputModelSJA, SubscriptionEmailModel };

