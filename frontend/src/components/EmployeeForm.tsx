// src/components/EmployeeForm.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createEmployee, updateEmployee, fetchEmployee } from '../api/employeeApi';
import './EmployeeStyles.css';




interface EmployeeData {
    name: string;
    position: string;
    department: string;
}

const EmployeeForm: React.FC = () => {
    const [employee, setEmployee] = useState<EmployeeData>({ name: '', position: '', department: '' });
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const getEmployee = async () => {
                const response = await fetchEmployee(id);
                setEmployee(response.data);
            };
            getEmployee();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            await updateEmployee(id, employee);
        } else {
            await createEmployee(employee);
        }
        navigate('/');
    };

    return (
        <div className='employee-form-container'>
            <h1>{id ? 'Edit Employee' : 'Add New Employee'}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={employee.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Position:
                    <input type="text" name="position" value={employee.position} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Department:
                    <input type="text" name="department" value={employee.department} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">{id ? 'Update' : 'Add'} Employee</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
