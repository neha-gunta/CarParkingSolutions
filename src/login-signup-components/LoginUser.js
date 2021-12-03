import { useEffect, useState } from "react";
import { withRouter, RouteComponentProps } from "react-router";


function LoginUser(props: MyComponent){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function LoginAsUser(){
        //write login code and establish connection to backend
    }

    return (  
        <div className="container"><br />
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center mt-4">Login as User</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input placeholder="username" name="Username" className="form-control"
                                    value={username} onChange={(e) => setUsername(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input placeholder="password" name="Password" className="form-control"
                                    value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-success" onClick={LoginAsUser}>Login</button>
                                </div><br />
                                <div className="text-center">or Login with</div><br />
                            </form>
                            <div className="text-center">
                                <button className="btn btn-primary" style={{marginLeft: "10px"}}>Google</button>
                                <button className="btn btn-primary" style={{marginLeft: "10px"}}>Facebook</button>
                                <button className="btn btn-primary" style={{marginLeft: "10px"}}>Instagram</button>
                                <button className="btn btn-primary" style={{marginLeft: "10px"}}>LinkedIn</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

interface MyComponent extends RouteComponentProps {
    myField: string;
}
 
export default withRouter(LoginUser);