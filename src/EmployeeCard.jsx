function EmployeeCard({ employee, deleteEmployee }) {
  return (
    <div>
      <h2>{employee.name}</h2>
      <p>Department: {employee.department}</p>
      <p>Type: {employee.employeeType}</p>
      <p>Gender: {employee.gender}</p>
      <p>Skills: {employee.skills ? employee.skills.join(", ") : "None"}</p>
      <p>Salary: {employee.salary}</p>
      <p>Description: {employee.description}</p>
      <button onClick={() => deleteEmployee(employee.id)}>Delete Employee</button>
      <hr />
    </div>
  );
}

export default EmployeeCard;
