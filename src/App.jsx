import { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import EmployeeList from './EmployeeList'

function App() {
  const [employees, setEmployees] = useState([])

  function addEmployee(employee) {
    setEmployees
    ([...employees, 
      employee
    ]);
  }

  function deleteEmployee(id) {
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== id // if id is matching delete it this is a shortcur method of deleting
    )
    setEmployees(updatedEmployees);
  }

  return (
    <div>

      <h1>Employee Management System</h1>

      <EmployeeForm
        addEmployee={addEmployee}
      />

      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default App