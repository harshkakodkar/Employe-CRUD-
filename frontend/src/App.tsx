import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeDetail from './components/EmployeeDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EmployeeList />} />
                <Route path="/employee/new" element={<EmployeeForm />} />
                <Route path="/employee/:id" element={<EmployeeDetail />} />
                <Route path="/employee/edit/:id" element={<EmployeeForm />} />
            </Routes>
        </Router>
    );
}

export default App;
