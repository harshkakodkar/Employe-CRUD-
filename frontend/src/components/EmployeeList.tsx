// src/components/EmployeeList.tsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchEmployees, deleteEmployee } from '../api/employeeApi';
import './EmployeeStyles.css';

interface Employee {
    _id: string;
    name: string;
    position: string;
    department: string;
    status: string;
}

const EmployeeList: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getEmployees = async () => {
            const response = await fetchEmployees();
            setEmployees(response.data);
        };
        getEmployees();
    }, []);

    const handleDelete = async (id: string) => {
        await deleteEmployee(id);
        setEmployees(employees.filter(employee => employee._id !== id));
    };

    const handleView = (id: string) => {
        navigate(`/employee/${id}`);
    };

    return (
        <div className="employee-list-container">
            <h1>Employee List</h1>
            <Link to="/employee/new">Add New Employee</Link>
            <ul>
                {employees.map(employee => (
                    <li key={employee._id}>
                        <span>{employee.name}</span>
                        <span> - {employee.position} in {employee.department}</span>
                        <div>
                            <button onClick={() => handleView(employee._id)}>View</button>
                            <button onClick={() => handleDelete(employee._id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
