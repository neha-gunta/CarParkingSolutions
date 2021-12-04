import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import SlotService from "../services/SlotService";
import { Link } from "react-router-dom";


const UserDashboard = () => {

    const [search, setSearch] = useState(false);
    const [location, setLocation] = useState("");
    const [date, setDate] = useState('');
    const [checkInTime, setCheckInTime] = useState(0);
    const [checkOutTime, setCheckOutTime] = useState(0);
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        getSlots()
    }, []);

    const getSlots = () => {
        SlotService.getSlots().then((response) => {
            setSlots(response.data);
            console.log(response.data);
        });
    };

    function SearchForSlots(){
        SlotService.getSlotsByLocation(location).then((response) => {
            setSlots(response.data);
            console.log(response.data);
        })
    }

    return ( 
        <div className="UserDashboard">
            <div className="navbardb" style={{backgroundColor: "#d6d5d5", height: "70px", width: "100%"}}>
                <button className="btn btn-default" style={{height: "50px", marginTop: "10px", marginLeft: "200px"}}>View Parking Slots</button>
                <button className="btn btn-default" style={{height: "50px", marginTop: "10px", marginLeft: "600px"}}>My Bookings</button> 
            </div>
            <div className="pagecontent">
                <div className="searchSlots">
                    <div className="container">
                        <h2 className="text-center">Search for Parking Slots</h2>
                        <div className="justify-content-center" style={{marginLeft: "270px"}}>
                        <form>
                            <div className="form-group"><br />
                                <label>Location</label>
                                <input type="text" placeholder="location" name="Location" className="form-control"
                                        value={location} onChange={(e) => setLocation(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input type="text" className="form-control" placeholder="date(dd/mm/yy)" name="Date"
                                value={date} onChange={date => {setDate(date)}} />
                            </div>
                            <div className="form-group">
                                <label>Check-in time (in 24hr format)</label>
                                <input type="text" className="form-control" placeholder="enter the hour" name="Checkintime"
                                onChange={(e) => {setCheckInTime(e.target.value);
                                console.log(checkInTime)}} />
                            </div>
                            <div className="form-group">
                                <label>Check-out time (in 24 hr format)</label>
                                <input type="text" className="form-control" className="form-control" placeholder="enter the hour" name="Checkintime"
                                onChange={(e) => setCheckOutTime(e.target.value)} />
                            </div>
                        </form>
                        <div style={{marginLeft: "250px"}}>
                            <button className="btn btn-primary" onClick={SearchForSlots}>Search</button>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="text-left" style={{marginLeft: "30px"}}>
                            <button className="btn btn-success" onClick={getSlots}>Get All Slots</button>
                        </div>
                {<div className="tables" style={{margin: "40px"}}>
                {/* <div className="text-center">
                    <p>Location: {location}</p>
                    <p>Date: {date}</p>
                    <p>Check-in time: {checkInTime}</p>
                    <p>Check-out time: {checkOutTime}</p>
                </div> */}
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Slot no.</th>
                                <th> Location</th>
                                <th> Availability Status</th>
                                <th> Price (per hour)</th>
                                <th> Facilities Available </th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                slots.map((slot) => {
                                    return(
                                        <tr key={slot.id}>
                                            <td>{slot.id}</td>
                                            <td>{slot.location}</td>
                                            <td>{slot.avail}</td>
                                            <td>{slot.cost}</td>
                                            <td></td>
                                            <td>
                                            <Link to={`/bookslot/${slot.id}`}><button className="btn btn-info">Check Out</button></Link>
                                            {/* <button className="btn btn-danger" style={{marginLeft: "10px"}} onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                            <button className="btn btn-info" style={{marginLeft: "10px"}} onClick={() => viewEmployee(employee.id)}>View</button> */}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                </div>}
            </div>
           
        </div>
    );
}
 
export default UserDashboard;