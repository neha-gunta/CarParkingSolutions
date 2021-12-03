import { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import EmployeeService from "./services/EmployeeService";

function CreateEm(props: updateEmProps){

    const [id, setId] = useState(props.match.params.id);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");

    function saveOrUpdateEmployee(event){
        event.preventDefault();
        let employee = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            emailId: emailId
        };
        console.log(JSON.stringify(employee));

        if(employee.id == -1){
            EmployeeService.createEmployee(employee).then((response) => {
                console.log(response);
            });    
        }  
        else{
            EmployeeService.getEmployeeById(employee.id).then((response) => {
                let empl = response.data;
                setFirstName(empl.firstName);
                setLastName(empl.lastName);
                setEmailId(empl.emailId);
            });

            EmployeeService.updateEmployee(employee, employee.id).then((response) => {
                console.log(response);
            });
        }

        props.history.push("/test");
        window.location.reload(false);
        
    }

    function getTitle(){
        if(id === -1){
            return <h3 className="text-center">Add Employee</h3>;
        }
        else{
            return <h3 className="text-center">Update Employee</h3>;
        }
    }

    return (  
        <div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {getTitle()}
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
                                <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Save</button>
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
 
export default withRouter(CreateEm);