import { useState,useEffect } from "react";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import EmployeeSummary from "./EmployeeSummary";

function App() {

    const [employees, setEmployees] = useState([]);

    const [filteredEmployees, setFilteredEmployees] = useState([]);

    function addEmployee(employee) {

        setEmployees([
            ...employees,
            employee
        ]);

    }

    function deleteEmployee(id) {

        const updatedEmployees = employees.filter(
            (employee) => employee.id !== id //If id is matching delete it ,this is a shortcut method of deleting
        );

        setEmployees(updatedEmployees);
    }

    useEffect(() => {document.title=`Employees (${employees.length})`}, [employees.length]); // ins useeffect there must be a [] which used to denote on which this effect will be applied or target

    useEffect(() => {console.log("useEffect Executed"); }); // alaways remember if user is using useeffect in project it needs a dependancy or dependancy array
    //it means it consists data 
    //by which side effect will run
    // useEffect(() => {console.log(`something has changed ${employees} or ${department}`); }, [employees, department]); // this is the correct way of using useeffect

/* three stages or types
first no depandancy array means it will run on every render
second empty depandancy array means it will run only once when component is mounted
third depandancy array with some data means it will run only when that data changes
*/ 

useEffect(() => {setFilteredEmployees(employees);}, [employees]); // this is the correct way of using useeffect
    return (
        <div>

            <h1>Employee Management System</h1>

            <EmployeeForm
                addEmployee={addEmployee}
            />

            <hr />

            <EmployeeSummary
                employee={employees}
            />

            <hr />

            <EmployeeSearch
                employees={employees}
                setFilteredEmployees={setFilteredEmployees}
            />

            <EmployeeList
                employees={employees}
                deleteEmployee={deleteEmployee}
            />

        </div>
    );
}

export default App;