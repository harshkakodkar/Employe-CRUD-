import { Request, Response } from 'express';
import Employee from '../models/Employee';

export const addEmployee = async (req: Request, res: Response) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add employee', error });
    }
};

export const getEmployees = async (req: Request, res: Response) => {
    try {
        const status = req.query.status || 'active';
        const employees = await Employee.find({ status });
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve employees', error });
    }
};

export const getEmployee = async (req: Request, res: Response) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(404).json({ message: 'Employee not found', error });
    }
};

export const updateEmployee = async (req: Request, res: Response) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update employee', error });
    }
};

export const deleteEmployee = async (req: Request, res: Response) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, { status: 'inactive' }, { new: true });
        res.status(200).json({ message: 'Employee soft-deleted successfully', employee });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete employee', error });
    }
};
