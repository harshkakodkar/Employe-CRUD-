// src/components/EmployeeDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchEmployee } from '../api/employeeApi';
import './EmployeeStyles.css';


interface Employee {
    _id: string;
    name: string;
    position: string;
    department: string;
    status: string;
}

const EmployeeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [employee, setEmployee] = useState<Employee | null>(null);

    useEffect(() => {
        const getEmployee = async () => {
            const response = await fetchEmployee(id!);
            setEmployee(response.data);
        };
        getEmployee();
    }, [id]);

    if (!employee) return <p>Loading...</p>;

    return (
        <div className='employee-detail-container'>
            <h1>Employee Details</h1>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Position:</strong> {employee.position}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Status:</strong> {employee.status}</p>
            <Link to={`/employee/edit/${employee._id}`}>Edit</Link>
        </div>
    );
};

export default EmployeeDetail;
