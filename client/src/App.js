import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Entry from './Entry';
import Chat from './chat';
import Profile from "./profile"
import Authentication from "./authentication";
import Login from "./login";
import PrivateRoute from "./private";
import About from "./about";

function App() {
  
  return (
    <div>
      <Authentication>
        <BrowserRouter>
          <Switch>
            <PrivateRoute path="/chat" component={Chat} exact/>
            <PrivateRoute path="/profile" component={Profile} exact/>
            <PrivateRoute path="/about" component={About} exact/>
            <Route path='/' component={Entry} exact/>
            <Route path='/login' component={Login} exact/>
          </Switch>
        </BrowserRouter>
      </Authentication>
    </div>
  );
}

export default App;
