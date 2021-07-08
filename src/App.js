import logo from './logo.svg';
import Home from './component_home.jsx' 
import FizzBuzz from './component_fizzbuzz.jsx'
import GetStarted from './component_getstarted.jsx'
import RPS from './component_rps.jsx'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/GetStarted">
            <GetStarted />
          </Route>
          <Route path="/FizzBuzz">
            <FizzBuzz />
          </Route>
          <Route path="/RPS">
            <RPS />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
