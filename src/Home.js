import img from "./icons/parking-lot-with-trees.jpg";

const Home = () => {
    return (  
        <div className="Home">
            <div className="car-img">
                <img src={img} style={{width: "100%"}}/>
            </div>
            <div className="home-right">
                <h1>CAR PARKING SOLUTIONS</h1>
                <div className="home-buttons">
                    <button>
                        ABOUT
                    </button><br />
                    <button>
                        LOGIN
                    </button><br />
                    <button>
                        SIGN UP
                    </button><br />
                </div>
            </div>
            
            
        </div>
    );
}
 
export default Home;