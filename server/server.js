const express = require('express');
const { connectDB, InputModelSJA, SubscriptionEmailModel } = require('./db.js');
const cors = require('cors');
const { z } = require('zod');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const InputSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    phone: z.number().int().refine((val) => {
        const phoneStr = val.toString();
        return phoneStr.length === 10;
    }, {
        message: 'Invalid phone number'
    }),
    services: z.string().min(1, 'Services are required')
});

const SubscriptionSchema = z.object({
    email: z.string().email('Invalid email address')
});
connectDB();

// Route to handle form submission and save email
app.post('/save-email', async (req, res) => {
    try {
        const validatedData = InputSchema.parse(req.body); // Validate data using Zod schema
        const formData = new InputModelSJA(validatedData);
        await formData.save();
        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ error: error.errors });
        } else {
            res.status(500).send('Error saving data: ' + error.message);
        }
    }
});

// Route to handle email subscriptions
app.post('/subscribe', async (req, res) => {
    try {
        const validatedData = SubscriptionSchema.parse(req.body);
        const { email } = validatedData;

        const existingEmail = await SubscriptionEmailModel.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: 'Email is already subscribed' });
        }

        const newSubscriptionEmail = new SubscriptionEmailModel({ email });
        await newSubscriptionEmail.save();

        res.status(201).json({ message: 'Email subscribed successfully' });
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ error: error.errors });
        } else {
            console.error('Error subscribing email:', error.message);
            res.status(500).json({ error: 'Server error' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
