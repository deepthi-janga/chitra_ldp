import Message1 from './components/FunctionalComponent.js';
import Message2 from './components/ClassComponent.js';
import CreateElement from './components/WithoutUsingJsx.js';
import Name from './components/PassPropsToComponent.js';
import Application from './UseOfState.js';
import HookCounterTwo from './components/SetStateBaseOnPreviousState.js';
import StateAsObject from './components/HooksWithStateVariableAsObject';
import StateAsArray from './components/HooksWithStateVariableAsArray';
import Container from './components/UnMounted';
import Header from './components/UpdateComponent';
import UseEffectComponent from './components/UseEffect';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import WelcomePage from './components/WelcomePage';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
        <Route path= "/" exact component = {BasePage}/>
        <Route path= "/BasePage" exact component = {BasePage}/>
        <Route path= "/HomePage" exact component = {HomePage}/>
        <Route path= "/WelcomePage" exact component = {WelcomePage}/>
    </Router>
    </div>
  
  );
}

const BasePage =() => {
  return (
  <div>
    <h1>Base Page</h1>
    <Link to ="/HomePage">
       <h1>Home Page</h1>
    </Link>
    <Link  to ="/WelcomePage">
       <h1>Welcome Page</h1>
    </Link>

  </div>
  );
};

export default App;

