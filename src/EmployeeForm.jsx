import {useState} from 'react';

// Multiple form input
function EmployeeForm({ addEmployee }) {

    const {formdata, setFormdata} = useState({
        name:"",
        department:"",
        employeeType:"",
        gender:"",
        skills:[],
        salary:"",
        description:""
    });

    function handleChange(e) {

        const {name,value} = e.target;
        setFormdata({
        ...formdata,//array
        [name]:value});//key
    }

    function handleSkillsChange(e) {
        const {value, checked} = e.target;

        if (checked) {
            setFormdata({
                ...formdata,
                skills: [...formdata.skills, value]
            });
        } else {
            setFormdata({
                ...formdata,
                skills: formdata.skills.filter(
                    (skill) => skill !== value)
            });
        }
     
    }

    function handleSubmit(e) {
        e.preventDefault();
        const employee ={
            id: Date.now(), // here id not have taken by normal integer, id have taken by using date
            ...formdata  // will store by using rest and spread operator in formdata
        };
        addEmployee(employee);


        setFormdata({
            name:"",
            department:"",
            employeeType:"",
            gender:"",
            skills:[],
            salary:"",
            description:""
        });
    }


    return (

        <form onSubmit={handleSubmit}>

            <h2>Employee Form</h2>

            {/* Name */}

            <label>Name</label>
            <br/>
            <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={handleChange}
                placeholder="Enter name"
            />
            <br/>  <br/>

            {/* Department */}
            <label>Department</label>
            <br/>
            <select
                name="department"
                value={formdata.department}
                onChange={handleChange}
            >
                <option value="">Select Department</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
            </select>
            <br/>  <br/>

            {/* Employee Type */}
            <label>Employee Type</label>
            <br/>
            <select
                name="employeeType"
                value={formdata.employeeType}
                onChange={handleChange}
            >
                <option value="">Select Employee Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
            </select>
            <br/>  <br/>

            {/* Gender */}
            <label>Gender</label>
            <br/>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formdata.gender === "Male"}
                    onChange={handleChange}
                />
                Male
            </label>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formdata.gender === "Female"}
                    onChange={handleChange}
                />
                Female
            </label>
            <br/>  <br/>

            {/* Skills in normal html user can add direct checkbox but in react as values must be reflects at the backend so user have to write inside
            */}

            <label>Skills</label>
            <br/>
            <label>
                <input
                    type="checkbox"
                    name="skills"
                    value="Python"
                    checked={formdata.skills.includes("Python")}
                    onChange={handleSkillsChange}
                />
                Python
            </label>

            <label>
                <input
                    type="checkbox"
                    name="skills"
                    value="JavaScript"
                    checked={formdata.skills.includes("JavaScript")}
                    onChange={handleSkillsChange}
                />
                JavaScript
            </label>

            <label>
                <input
                    type="checkbox"
                    name="skills"
                    value="Java"
                    checked={formdata.skills.includes("Java")}
                    onChange={handleSkillsChange}
                />
                Java
            </label>
            <br/>  <br/>

            {/* Salary */}
            <label>Salary</label>
            <br/>
            <input
                type="number"
                name="salary"
                value={formdata.salary}
                onChange={handleChange}
                placeholder="Enter salary"
            />
            <br/>  <br/>

            {/* Description */}
            <label>Description</label>
            <br/>
            <textarea
                name="description"
                value={formdata.description}
                onChange={handleChange}
                placeholder="Enter description"
            />
            <br/>  <br/>

            <button type="submit">Add Employee</button>
        </form>
    );

}
    
export default EmployeeForm;