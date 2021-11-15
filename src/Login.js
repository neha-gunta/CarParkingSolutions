import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "./icons/admin.png";
import img2 from "./icons/man.png";
import img3 from "./icons/construction-worker.png";

const Login = () => {

    const [loginpage, setLoginpage] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState(false);
    const [worker, setWorker] = useState(false);

    function Admintrue(){
        setAdmin(true);
        setLoginpage(true);
    }
    
    function Usertrue(){
        setUser(true);
        setLoginpage(true);
    }

    function Workertrue(){
        setWorker(true);
        setLoginpage(true);
    }

    return ( 
        <div className="Login">
            <h1>Login</h1>
            {loginpage==false && <div className="threelogins">
                <div className="AdminLogin">
                    <img src={img1}></img><br /><br />
                    <button onClick={Admintrue}>Admin</button>
                </div>
                <div className="UserLogin">
                    <img src={img2}></img><br /><br />
                    <button onClick={Usertrue}>User</button>
                </div>
                <div className="WorkerLogin">
                    <img src={img3}></img><br /><br />
                    <button onClick={Workertrue}>Worker</button>
                </div>
            </div>}
            {/* {loginpage==true && } */}
            
        </div>
    );
}
 
export default Login;