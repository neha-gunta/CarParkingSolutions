import './index.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Metadata from './Metadata';
import Home from './Home';
import Navbar from './Navbar';
import Login from './login-signup-components/Login';
import Signup from './login-signup-components/Signup';
import UserDashboard from './dashboards/UserDashboard';
import AdminDashboard from './dashboards/AdminDashboard';
import WorkerDashboard from './dashboards/WorkerDashboard';
import Test from './ListEmployeeComp';
import CreateEm from './CreateEmployeeComp';
import UpdateEm from './UpdateEmployeeComp';
import ViewEmployee from './ViewEmployee';
import LoginAdmin from './login-signup-components/LoginAdmin';
import LoginUser from './login-signup-components/LoginUser';
import LoginWorker from './login-signup-components/LoginWorker';
import BookSlotComp from './BookSlotComp'


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

            <Route exact path="/loginAdmin" component={LoginAdmin}>
              <LoginAdmin />
            </Route>

            <Route exact path="/loginUser" component={LoginUser}>
              <LoginUser />
            </Route>

            <Route exact path="/loginWorker" component={LoginWorker}>
              <LoginWorker />
            </Route>

            <Route exact path="/signup" component={Signup}>
                <Signup />
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

            <Route exact path="/createem/:id" component={CreateEm}>
              <CreateEm />
            </Route>
          
            {/* <Route exact path="/update-employee/:id" component={UpdateEm}>
              <UpdateEm />
            </Route> */}

            <Route exact path="/view/:id" component={ViewEmployee}>
              <ViewEmployee />
            </Route>

            <Route exact path="/bookslot/:id" component={BookSlotComp}>
              <BookSlotComp />
            </Route>
          
      </div>
    </Router>
  );
}

export default App;
