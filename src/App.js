
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import NoFound from './components/NoFound/NoFound';

function App() {
  return (
    <Router>
              <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/comment/:postId">
        <About></About>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="*">
          <NoFound />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
