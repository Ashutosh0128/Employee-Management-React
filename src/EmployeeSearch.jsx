import {useState, useEffect} from "react";

function EmployeeSearch({ employees, setFilteredEmployees }) {

    const [ search, setSearch] = useState("");
    const [department, setDepartment] = useState("All");

    useEffect(() => {
        let result = employees;

        // Search filtering

        if (search !== "") {

            result = result.filter((employee) =>
                employee.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Department filtering
        if (department !== "All") {
            result = result.filter((employee) =>
                employee.department === department
            );
        }

        setFilteredEmployees(result);
    }, [search, department, employees, setFilteredEmployees]); // useEffects dependancy array
    
    return (
        <div>
            <h2>Search Employees</h2>
            <input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <br /> <br />

            <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
            >   
                <option value="All">All Departments</option>
                <option value="Development">Development</option>
                <option value="Testing">Testing</option>
                <option value="HR">HR</option>
            </select>
        </div>
    );
}
export default EmployeeSearch;