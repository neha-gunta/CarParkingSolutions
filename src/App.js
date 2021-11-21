import './index.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Metadata from './Metadata';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import WorkerDashboard from './WorkerDashboard';
import Test from './ListEmployeeComp';
import CreateEm from './CreateEmployeeComp';
import UpdateEm from './UpdateEmployeeComp';


function App() {
  return (
    <Router>
      <div className="App">
          <Metadata />
          <Navbar />

            <Route exact path="/" component={Home}>
              <Home />
            </Route>

            <Route exact path="/login" component={Login}>
              <Login />  
            </Route>   

            <Route exact path="/signup" component={Signup}>
              <div className="container">
                <Signup />
              </div>
            </Route>

            <Route exact path="/userdashboard" component={UserDashboard}>
              <UserDashboard />
            </Route>

            <Route exact path="/admindashboard" component={AdminDashboard}>
              <AdminDashboard />
            </Route>

            <Route exact path="/workerdashboard" component={WorkerDashboard}>
              <WorkerDashboard />
            </Route>

            <Route exact path="/test" component={Test}>
              <div className="container">
                <Test />
              </div>
            </Route>

            <Route exact path="/createem" component={CreateEm}>
              <CreateEm />
            </Route>
          
            <Route exact path="/update-employee/:id" component={UpdateEm}>
              <UpdateEm />
            </Route>
          
      </div>
    </Router>
  );
}

export default App;
