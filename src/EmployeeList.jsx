import EmployeeCard from './EmployeeCard';

function EmployeeList({ employees, deleteEmployee }) {
    if (employees.length === 0) {

        return <h1>No employees found.</h1>;
    }

    return (
        <div>
            <h1>Employee List</h1>
            {employees.map((employee) => (
                <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    deleteEmployee={deleteEmployee}
                />
            ))}
        </div>
    );
}

export default EmployeeList;