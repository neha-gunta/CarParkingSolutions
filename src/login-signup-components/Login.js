import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter, RouteComponentProps } from "react-router";
import img1 from "../icons/admin.png";
import img2 from "../icons/man.png";
import img3 from "../icons/construction-worker.png";

function Login(props: MyComponent){

    return ( 
        <div className="Login">
            <h1>Login</h1>
            <div className="threelogins">
                <div className="AdminLogin">
                    <img src={img1}></img><br /><br />
                    <Link to="/loginAdmin"><button>Admin</button></Link>
                </div>
                <div className="UserLogin">
                    <img src={img2}></img><br /><br />
                    <Link to="/loginUser"><button>User</button></Link>
                </div>
                <div className="WorkerLogin">
                    <img src={img3}></img><br /><br />
                    <Link to="/loginWorker"><button>Worker</button></Link>
                </div>
            </div>
        </div>
    );
}
 
interface MyComponent extends RouteComponentProps {
    myField: string;
}

export default withRouter(Login);