import './App.css';
import Main from "./main";
import Login from "./login";
import Signup from "./signup";
import Dashboard from "./dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 
import Forgot from './forgot';

function App() {
  return <>
    <Router>
      <Switch>
        <Route path="/" component={Main} exact={true}></Route>
        <Route path="/login" component={Login} exact={true}></Route>
        <Route path="/signup" component={Signup} exact={true}></Route>
        <Route path="/dashboard" component={Dashboard} exact={true}></Route>
        <Route path="/forgot" component={Forgot} exact={true}></Route>
      </Switch>
    </Router>
  </>
}

export default App;
