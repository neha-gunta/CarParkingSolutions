import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Signup = () => {
    return (  
        <div className="signup">
            <Form className="container center_div">
                <div className="form-group">
                    <label>FIRST NAME</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="names">
                    <label>LAST NAME</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="names">
                <label>ADDRESS</label>
                <input type="text" className="form-control"/>
                </div>

                <div className="names">
                    <label>CITY/TOWN</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="state">
                    <label>STATE</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="pincode">
                    <label>PINCODE</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="names">
                    <label>CAR  REGISTRATION  NUMBER</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="names">
                    <label>MOBILE NUMBER</label>
                    <input type="text" className="form-control"/>
                </div>
                
                <div className="names">
                    <label>EMAIL</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="names">
                    <label>OTP</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="signup-buttons">
                        <Button>
                            VERIFY
                        </Button><br />
                </div>

                <div className="otp">
                        <Button>
                            SEND OTP
                        </Button><br />
                </div>
                <h3>Did not receive otp?</h3>
                <div className="Resend-button">
                    <Button>
                        RESEND
                    </Button><br />
                </div>
                <div className="proceed">
                    <Button>
                        PROCEED
                    </Button><br />
                </div>
            </Form>
        </div>
          
    );
}
 
export default Signup;