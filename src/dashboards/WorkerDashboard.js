const WorkerDashboard = () => {

    

    return (  
        <div className="WorkerDashboard">
            <div className="tables" style={{marginLeft: "20px", marginTop: "50px", marginRight: "20px"}}>
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
                    {/* <tbody>
                        {
                            employees.map((employee) => {
                                return(
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                        <Link to={`/createem/${employee.id}`}><button className="btn btn-info">Update</button></Link>
                                        <button className="btn btn-danger" style={{marginLeft: "10px"}} onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                        <button className="btn btn-info" style={{marginLeft: "10px"}} onClick={() => viewEmployee(employee.id)}>View</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody> */}
                </table>
            </div>
            </div>
        </div>
    );
}
 
export default WorkerDashboard;