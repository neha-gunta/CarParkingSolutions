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
          
          
      </div>
    </Router>
  );
}

export default App;
