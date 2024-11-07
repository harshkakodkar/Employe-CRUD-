import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
    try {
        // Use environment variable MONGO_URI or fallback to local MongoDB URL
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/EmpData';
        
        await mongoose.connect(mongoURI);
        console.log(`MongoDB connected at ${mongoURI}`);
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

export default connectDB;
