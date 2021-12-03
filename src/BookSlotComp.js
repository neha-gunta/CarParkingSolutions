import { withRouter, RouteComponentProps } from "react-router";
import {useState, useEffect} from "react";
import SlotService from "./services/SlotService";

function BookSlotComp(props: MyComponent){

    const [id, setId] = useState(props.match.params.id);
    const [slot, setSlot] = useState([]);

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
        <div><br />
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View Slot Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label>Slot number: </label>
                        <div>{id}</div>
                    </div>
                    <div className="row">
                        <label>Location: </label>
                        <div>{slot.location}</div>
                    </div>
                    <div className="row">
                        <label>Price per hour: </label>
                        <div>{slot.cost}</div>
                    </div>
                    <div className="row">
                        <label>Total cost: </label>
                        <div>{slot.cost}</div>
                    </div>
                    {/* <div className="row">
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
                    </div>     */}
                    
                </div>
            </div>
        </div>
    );
}

interface MyComponent extends RouteComponentProps {
    myField: string;
}
 
export default withRouter(BookSlotComp);