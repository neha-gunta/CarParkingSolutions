import { useState, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import SlotService from "./services/SlotService";

function BookSlotComp(props: updateEmProps){

    const [id, setId] = useState(props.match.params.id);
    const [slot, setSlot] = useState([]);
    const [location, setLocation] = useState("");
    const [date, setDate] = useState('');
    const [checkInTime, setCheckInTime] = useState(0);
    const [checkOutTime, setCheckOutTime] = useState(0);

    // function updateEmployee(event){
    //     event.preventDefault();
    //     let employee = {
    //         id: id,
    //         firstName: firstName,
    //         lastName: lastName,
    //         emailId: emailId
    //     };
    //     console.log(JSON.stringify(employee));

    //     EmployeeService.getEmployeeById(employee.id).then((response) => {
    //         let empl = response.data;
    //         setFirstName(empl.firstName);
    //         setLastName(empl.lastName);
    //         setEmailId(empl.emailId);
    //     });

    //     EmployeeService.updateEmployee(employee, employee.id).then((response) => {
    //         console.log(response);
    //     });

    //     props.history.push("/test");
    //     window.location.reload(false);
    //     }
    // }

    useEffect(() => {
        getSlot()
    }, []);

    const getSlot = () => {
        SlotService.getSlotById(id).then((response) => {
            setSlot(response.data);
            console.log(response.data);
        });
    };

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
                                    <label>Slot Id:</label>
                                    <div> {slot.id} </div>
                                </div>
                                <div className="form-group">
                                    <label>Slot location: </label>
                                    <div> {slot.location} </div>
                                </div>
                                <div className="form-group">
                                    <label>Date: </label>
                                    <div> {slot.date} </div>
                                </div>
                                <div className="form-group">
                                    <label>Check-in time: </label>
                                    <div> {slot.checkInTime} </div>
                                </div>
                                <div className="form-group">
                                    <label>Check-out time: </label>
                                    <div> {slot.location} </div>
                                </div>
                                <div className="form-group">
                                    <label>Email Id</label>
                                    <input placeholder="email id" name="emailId" className="form-control"
                                    ></input>
                                </div>
                                <Link to="/">Home</Link>
                                <Link to="/test"><button className="btn btn-success" onClick={getSlot}>Save</button></Link>
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
 
export default withRouter(BookSlotComp);