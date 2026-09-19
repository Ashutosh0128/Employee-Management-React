import {userState, useState} from 'react';

function EmployeeForm({ addEmployee }) {
    //callback function
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [salary, setSalary] = useState("");

    function handleSubmit(e) // here data will be inserted by event
    {
        e.preventDefault();

        const newEmployee = {
            id: Date.now(),
            name:name,
            department:department,
            salary:salary
        };
        addEmployee(newEmployee);
        setName("");
        setDepartment("");
        setSalary("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Employee</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <br /><br /><br />
            <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
            <br /><br /><br />
            <input type="text" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
            <br /><br /><br />
            <button type="submit">Add Employee</button>
        </form>
    );
}

export default EmployeeForm;

