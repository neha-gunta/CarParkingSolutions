import React, { useState, useEffect } from "react";
import EmployeeService from "./services/EmployeeService";
import { Link } from "react-router-dom";

const Test = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees()
    }, []);

    const getEmployees = () => {
        EmployeeService.getEmployees().then((response) => {
            setEmployees(response.data);
            console.log(response.data);
        });
    };

    const editEmployee = (id) => {
        

    }

    return (  
        <div >
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <button className="btn btn-primary">Add Employee</button>
            </div><br/>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Employee first name</th>
                            <th> Employee last name</th>
                            <th> Employee Email Id</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee) => {
                                return(
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                        <Link to={`/update-employee/${employee.id}`}><button className="btn btn-info">Update</button></Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default Test;