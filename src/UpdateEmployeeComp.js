import { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import EmployeeService from "./services/EmployeeService";

function UpdateEm(props: updateEmProps){

    const [id, setId] = useState(props.match.params.id);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");

    function updateEmployee(event){
        event.preventDefault();
        let employee = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            emailId: emailId
        };
        console.log(JSON.stringify(employee));

        EmployeeService.getEmployeeById(employee.id).then((response) => {
            let empl = response.data;
            setFirstName(empl.firstName);
            setLastName(empl.lastName);
            setEmailId(empl.emailId);
        });

        EmployeeService.updateEmployee(employee, employee.id).then((response) => {
            console.log(response);
        });

        props.history.push("/test");
        window.location.reload(false);
    }

    return (  
        <div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Employee</h3>
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
                                <Link to="/">Home</Link>
                                <Link to="/test"><button className="btn btn-success" onClick={updateEmployee}>Save</button></Link>
                                {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

interface updateEmProps extends RouteComponentProps {
    myField: string;
}
 
export default withRouter(UpdateEm);