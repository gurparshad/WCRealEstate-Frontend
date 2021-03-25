import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MenuBar from "./components/MenuBar/MenuBar";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AddProperty from "./components/AddProperty/AddProperty";
import AddPictures from "./components/AddPictures/AddPictures";
import PropertyList from "./components/PropertyList/PropertyList";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import EditProperty from "./components/EditPropertty/EditProperty";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

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
          <Redirect to={{ pathname: "/login" }}></Redirect>
        )
      }
    ></Route>
  );
};

function App() {
  return (
    <div className="pageContainer">
      <div className="wrapper">
        <Router>
          <ScrollToTop />
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
              <Route exact path="/propertyList">
                <PropertyList />
              </Route>
              <Route exact path="/propertyDetails/:propertyId">
                <PropertyDetails />
              </Route>
              <SecuredRoute
                path="/addProperty"
                component={AddProperty}
              ></SecuredRoute>
              <SecuredRoute
                path="/addProperty/addPictures/:propertyId"
                component={AddPictures}
              ></SecuredRoute>
              <SecuredRoute path="/profile" component={Profile}></SecuredRoute>
              <SecuredRoute
                path="/property/editProperty/:propertyId"
                component={EditProperty}
              ></SecuredRoute>
            </Switch>
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
