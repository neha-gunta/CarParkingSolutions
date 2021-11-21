import { useState } from "react";
import EmployeeService from "./services/EmployeeService";

const UpdateEm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");

    function saveEmployee(event){
        event.preventDefault();
        let employee = {
            firstName: firstName,
            lastName: lastName,
            emailId: emailId
        };
        console.log(JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then((response) => {
            console.log(response);
        })
    }

    return (  
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input placeholder="first name" name="FirstName" className="form-control"
                                    value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input placeholder="last name" name="LastName" className="form-control"
                                    value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label>Email Id</label>
                                    <input placeholder="email id" name="emailId" className="form-control"
                                    value={emailId} onChange={(e) => setEmailId(e.target.value)}></input>
                                </div>
                                <button className="btn btn-success" onClick={saveEmployee}>Save</button>
                                {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default UpdateEm;