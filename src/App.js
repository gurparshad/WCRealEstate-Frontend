import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MenuBar from "./components/MenuBar/MenuBar";
import Banner from "./components/Banner/Banner";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AddProperty from "./components/AddProperty/AddProperty";
import AddPictures from "./components/AddPictures/AddPictures";
import PropertyList from "./components/PropertyList/PropertyList";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";
import Home from "./components/Home/Home";

export const authentication = {
  isLoggedIn: false,

  onAuthentication() {
    this.isLoggedIn = true;
  },

  onLogout() {
    this.isLoggedIn = false;
  },

  getLogInStatus() {
    return this.isLoggedIn;
  },
};

export const SecuredRoute = (props) => {
  return (
    <Route
      path={props.path}
      render={(data) =>
        authentication.getLogInStatus() ? (
          <props.component {...data}></props.component>
        ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )
      }
    ></Route>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <MenuBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/addProperty">
            <AddProperty />
          </Route>
          <Route exact path="/addProperty/addPictures/:propertyId">
            <AddPictures />
          </Route>
          <Route exact path="/propertyList">
            <PropertyList />
          </Route>
          <Route exact path="/propertyDetails/:propertyId">
            <PropertyDetails />
          </Route>
        </Switch>

        {/* <SecuredRoute path="/dashboard" component={Dashboard}></SecuredRoute> */}
        {/* <SecuredRoute path="/community" component={Community}></SecuredRoute> */}
      </div>
    </Router>
  );
}

export default App;
