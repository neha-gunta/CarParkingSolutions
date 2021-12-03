import { useState, useEffect } from "react";
import UserService from "../services/UserService";
import { Link } from "react-router-dom";

const AdminDashboard = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    }, []);

    const getUsers = () => {
        UserService.getUsers().then((response) => {
            setUsers(response.data);
            console.log(response.data);
        });
    };

    function deleteUser(id){
        UserService.deleteUser(id).then((response) => {
            console.log(id);
            window.location.reload(false);
        })
    }

    return (  
        <>
        <div className="navbardb" style={{backgroundColor: "#d6d5d5", height: "70px"}}>
                <button className="btn btn-default" style={{ height: "50px", marginTop: "10px", marginLeft: "200px"}}>View Users</button>
                <button className="btn btn-default" style={{ height: "50px", marginTop: "10px", marginLeft: "200px"}}>View Parking Slots</button>
                <button className="btn btn-default" style={{ height: "50px", marginTop: "10px", marginLeft: "200px"}}>All Bookings</button> 
                <button className="btn btn-default" style={{height: "50px", marginTop: "10px", marginLeft: "200px"}}>Workers</button> 
            </div>
        <div className="AdminDashboard">    
            <div className="tables" style={{marginLeft: "60px", marginTop: "30px"}}>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Id</th>
                            <th> First Name</th>
                            <th> Last Name</th>
                            <th> Username</th>
                            <th> Password</th>
                            <th> Email Id</th>
                            <th> Mobile Number</th>
                            <th> Car Reg. Number</th>
                            <th> Address</th>
                            <th> City</th>
                            <th> State</th>
                            <th> Pincode</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return(
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        <td>{user.emailId}</td>
                                        <td>{user.mobileNum}</td>
                                        <td>{user.carreg}</td>
                                        <td>{user.address}</td>
                                        <td>{user.city}</td>
                                        <td>{user.state}</td>
                                        <td>{user.pincode}</td>
                                        <td>
                                        <Link to={`/createem/${user.id}`}><button className="btn btn-info">Update</button></Link>
                                        <button className="btn btn-danger" style={{marginLeft: "10px"}} onClick={() => deleteUser(user.id)}>Delete</button>
                                        {/*<button className="btn btn-info" style={{marginLeft: "10px"}} onClick={() => viewEmployee(employee.id)}>View</button> */}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </>
    );
}
 
export default AdminDashboard;