function EmployeeCard({ employee , deleteEmployee }) {
    return (
        <div>
            <h2>{employee.name}</h2>
            <p>Department: {employee.department}</p>
            <p>Salary: {employee.salary}</p>
            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
            <hr />
        </div>
    );
}
export default EmployeeCard;

