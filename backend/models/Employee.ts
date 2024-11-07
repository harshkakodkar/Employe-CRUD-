import mongoose, { Document, Schema } from 'mongoose';

export interface EmployeeDocument extends Document {
    name: string;
    position: string;
    department: string;
    status?: string;
}

const EmployeeSchema: Schema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    status: { type: String, default: 'active' },
});

export default mongoose.model<EmployeeDocument>('Employee', EmployeeSchema);
