import { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";

const Signup = () => {

    const [Continue, setContinue] = useState(false);
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setstate] = useState("");
    const [pincode, setPincode] = useState(0);
    const [carRegistration, setCarReg] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [OTP, setOTP] = useState(0);

    function checkContinue(){
        setContinue(true);
    }

    return (  
        <div className="signup"><br />
            <div>
            <h2 className="text-center">Signup</h2>
            <div className="container-fluid d-flex justify-content-center">
                <Card className="col-md-5" style={{margin: "40px"}}>
                    <Card.Body>
                        <Card.Title>Enter details</Card.Title>
                                <form>
                                    <div className="form-group">
                                        <label>FIRST NAME</label>
                                        <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                    </div>

                                    <div className="form-group">
                                        <label>LAST NAME</label>
                                        <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                    </div>

                                    <div className="form-group">
                                    <label>ADDRESS</label>
                                    <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)}/>
                                    </div>

                                    <div className="form-group">
                                        <label>CITY/TOWN</label>
                                        <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)}/>
                                    </div>

                                    <div className="form-group">
                                        <label>STATE</label>
                                        <input type="text" className="form-control" value={state} onChange={(e) => setstate(e.target.value)}/>
                                    </div>

                                    <div className="form-group">
                                        <label>PINCODE</label>
                                        <input type="text" className="form-control" value={pincode} onChange={(e) => setPincode(e.target.value)}/>
                                    </div>

                                    <div className="form-group">
                                        <label>CAR  REGISTRATION  NUMBER</label>
                                        <input type="text" className="form-control" value={carRegistration} onChange={(e) => setCarReg(e.target.value)}/>
                                    </div>

                                    <div className="form-group">
                                        <label>MOBILE NUMBER</label>
                                        <input type="text" className="form-control" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}/>
                                    </div>
                                    <br />
                                </form>
                    </Card.Body>
                </Card>
                <Card className="col-md-5" style={{margin: "40px"}}>
                    <Card.Body>
                        <form>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                        <label>Password</label>
                                        <input type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div className="form-group"><br />
                                    <label>Email</label>
                                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/><br />
                                    <div className="text-center">
                                        <button className="btn btn-primary" >Send OTP</button><br />
                                    </div>
                                </div>
                                <div className="form-group">
                                            <label>Enter OTP</label>
                                            <input type="text" className="form-control" value={OTP} onChange={(e) => setOTP(e.target.value)}/><br />
                                    <div className="text-center">
                                        <button className="btn btn-primary">Verify OTP</button><br />
                                    </div>
                                </div>
                                    <h3 className="text-center">Or</h3>
                                <div className="text-center">
                                    <h4>Using any social media account</h4>
                                    <button className="btn btn-primary" style={{marginBottom: "10px"}}>Google</button><br />
                                    <button className="btn btn-primary" style={{marginBottom: "10px"}}>Facebook</button><br />
                                    <button className="btn btn-primary" style={{marginBottom: "10px"}}>Instagram</button><br />
                                    <button className="btn btn-primary" style={{marginBottom: "10px"}}>LinkedIn</button>
                                </div>
                            </form>
                    </Card.Body>
                </Card>
            </div>
            <div className="text-center">
                <button className="btn btn-success" onClick={checkContinue}>Continue</button><br />
            </div>
            <div className="foot" style={{height: "50px"}}></div>
        </div>
        </div>

          
    );
}
 
export default Signup;