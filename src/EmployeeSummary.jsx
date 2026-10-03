import {useEffect, useState} from "react";

function EmployeeSummary({ employee }) {
    const [summary, setSummary] = useState({
        total: 0,
        development: 0,
        testing: 0,
        hr: 0,
    });

    useEffect(() => {

        const development=
        employee.filter(
            (employee) => employee.department === "Development"
        ).length;

        const testing=
        employee.filter(
            (employee) => employee.department === "Testing"
        ).length;

        const hr=
        employee.filter(
            (employee) => employee.department === "HR"
        ).length;

        setSummary({
            total: employee.length,
            development: development,
            testing: testing,
            hr: hr
        });
    }, [employee]);

    return (
        <div>
            <h2>Employee Summary</h2>
            <p>Total Employees: {summary.total}</p>
            <p>Development: {summary.development}</p>
            <p>Testing: {summary.testing}</p>
            <p>HR: {summary.hr}</p>
        </div>
    );
}
export default EmployeeSummary;