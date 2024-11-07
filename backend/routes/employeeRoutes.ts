import express from 'express';
import { addEmployee, getEmployees, getEmployee, updateEmployee, deleteEmployee } from '../controllers/employeeController';

const router = express.Router();

router.post('/employees', addEmployee);
router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

export default router;
