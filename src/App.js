import './index.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Metadata from './Metadata';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

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

            <Route exact path="/dashboard" component={Dashboard}>
              <Dashboard />
            </Route>
          

      </div>
    </Router>
  );
}

export default App;
