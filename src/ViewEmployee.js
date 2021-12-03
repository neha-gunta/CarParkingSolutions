import { withRouter, RouteComponentProps } from "react-router";
import {useState, useEffect} from "react";
import EmployeeService from "./services/EmployeeService";

function ViewEmployee(props: MyComponent){

    const [id, setId] = useState(props.match.params.id);
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        getEmployee()
    }, []);

    const getEmployee = () => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setEmployee(response.data);
            console.log(response.data);
        });
    };

    return (  
        <div><br />
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label>Employee First Name: </label>
                        <div> {employee.firstName} </div>
                    </div>
                    <div className="row">
                        <label>Employee Last Name: </label>
                        <div> {employee.lastName} </div>
                    </div>    
                    <div className="row">
                        <label>Employee Email Id: </label>
                        <div> {employee.emailId} </div>
                    </div>    
                </div>
            </div>
        </div>
    );
}

interface MyComponent extends RouteComponentProps {
    myField: string;
}
 
export default withRouter(ViewEmployee);