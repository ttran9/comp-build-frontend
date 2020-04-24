import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/layout/Landing";
import Register from "./components/userManagement/Register";
import Login from "./components/userManagement/Login";
import * as Constants from "./Constants";
import VerifyRegistrationToken from "./components/userManagement/VerifyRegistrationToken";
import RequestSuccess from "./components/userManagement/RequestSuccess";
import AccountActivated from "./components/userManagement/AccountActivated";
import Footer from "./components/layout/Footer";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecuredRoutes from "./securityUtils/SecuredRoutes";
import RequestPasswordChange from "./components/userManagement/RequestPasswordChange";
import ProcessPasswordChange from "./components/userManagement/ProcessPasswordChange";
import ComputerBuildDetail from "./components/computerBuildDetail/ComputerBuildDetail";
import AddComputerBuild from "./components/computerBuild/AddComputerBuild";
import AddComputerPart from "./components/computerBuildDetail/AddComputerPart";
import EditComputerPart from "./components/computerBuildDetail/EditComputerPart";
import AddDirection from "./components/computerBuildDetail/AddDirection";
import EditDirection from "./components/computerBuildDetail/EditDirection";
import AddBuildNote from "./components/computerBuildDetail/AddBuildNote";
import EditBuildNote from "./components/computerBuildDetail/EditBuildNote";
import AddOverclockingNote from "./components/computerBuildDetail/AddOverclockingNote";
import EditOverclockingNote from "./components/computerBuildDetail/EditOverclockingNote";
import AddPurpose from "./components/computerBuildDetail/AddPurpose";
import EditPurpose from "./components/computerBuildDetail/EditPurpose";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  /*
   * for each page we go to we must update the status of our token because there are many pages on this web application that requires we are
   * authenticated (we must have a valid jwt token to view the web page or to make API calls.)
   */
  setJWTToken(jwtToken);
  const decoded_token = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_token
  });

  const currentTime = Date.now() / 1000;
  if (decoded_token.exp < currentTime) {
    // token is expired so we must redirect to the home page.
    store.dispatch(logout());
    window.location.href = `${Constants.HOME_URL}`;
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path={`${Constants.HOME_URL}`} component={Landing} />
              <Route
                exact
                path={`${Constants.REGISTER_URL}`}
                component={Register}
              />
              <Route exact path={`${Constants.LOGIN_URL}`} component={Login} />
              <Route
                exact
                path={`${Constants.CONFIRM_REGISTRATION_URL}/${Constants.TOKEN_PATH_VARIABLE}`}
                component={VerifyRegistrationToken}
              />
              <Route
                exact
                path={`${Constants.REQUEST_SUCCESS_URL}`}
                component={RequestSuccess}
              />
              <Route
                exact
                path={`${Constants.ACCOUNT_ACTIVATED_URL}`}
                component={AccountActivated}
              />
              <Route
                exact
                path={`${Constants.COMPUTER_BUILD_URL}${Constants.BUILD_IDENTIFIER_PATH_VARIABLE}`}
                component={ComputerBuildDetail}
              />

              {
                // Private/Protected Routes below.
              }
              <SecuredRoutes
                exact
                path={`${Constants.CHANGE_PASSWORD_URL}`}
                component={RequestPasswordChange}
              />
              <SecuredRoutes
                exact
                path={`${Constants.CHANGE_PASSWORD_URL}/${Constants.TOKEN_PATH_VARIABLE}`}
                component={ProcessPasswordChange}
              />
              <SecuredRoutes
                exact
                path={`${Constants.CREATE_COMPUTER_BUILD_URL}`}
                component={AddComputerBuild}
              />
              <SecuredRoutes
                exact
                path={`${Constants.COMPUTER_BUILD_URL}${Constants.BUILD_IDENTIFIER_PATH_VARIABLE}${Constants.CREATE_COMPUTER_PART_URL}`}
                component={AddComputerPart}
              />
              <SecuredRoutes
                exact
                path={`${Constants.UPDATE_COMPUTER_PART_URL}${Constants.BUILD_IDENTIFIER_PATH_VARIABLE}/${Constants.UNIQUE_IDENTIFIER_PATH_VARIABLE}`}
                component={EditComputerPart}
              />
              <SecuredRoutes
                exact
                path={`${Constants.COMPUTER_BUILD_URL}${Constants.BUILD_IDENTIFIER_PATH_VARIABLE}${Constants.CREATE_DIRECTION_URL}`}
                component={AddDirection}
              />
              <SecuredRoutes
                exact
                path={`${Constants.UPDATE_DIRECTION_URL}${Constants.BUILD_IDENTIFIER_PATH_VARIABLE}/${Constants.UNIQUE_IDENTIFIER_PATH_VARIABLE}`}
                component={EditDirection}
              />
              <SecuredRoutes
                exact
                path={`${Constants.COMPUTER_BUILD_URL}${Constants.BUILD_IDENTIFIER_PATH_VARIABLE}${Constants.CREATE_BUILD_NOTE_URL}`}
                component={AddBuildNote}
              />
              <SecuredRoutes
                exact
                path={`${Constants.UPDATE_BUILD_NOTE_URL}${Constants.BUILD_IDENTIFIER_PATH_VARIABLE}/${Constants.UNIQUE_IDENTIFIER_PATH_VARIABLE}`}
                component={EditBuildNote}
              />
              <SecuredRoutes
                exact
                path={`${Constants.COMPUTER_BUILD_URL}${Constants.BUILD_IDENTIFIER_PATH_VARIABLE}${Constants.CREATE_OVERCLOCKING_NOTE_URL}`}
                component={AddOverclockingNote}
              />
              <SecuredRoutes
                exact
                path={`${Constants.UPDATE_OVERCLOCKING_NOTE_URL}${Constants.BUILD_IDENTIFIER_PATH_VARIABLE}/${Constants.UNIQUE_IDENTIFIER_PATH_VARIABLE}`}
                component={EditOverclockingNote}
              />
              <SecuredRoutes
                exact
                path={`${Constants.COMPUTER_BUILD_URL}${Constants.BUILD_IDENTIFIER_PATH_VARIABLE}${Constants.CREATE_PURPOSE_URL}`}
                component={AddPurpose}
              />
              <SecuredRoutes
                exact
                path={`${Constants.UPDATE_PURPOSE_URL}${Constants.BUILD_IDENTIFIER_PATH_VARIABLE}/${Constants.UNIQUE_IDENTIFIER_PATH_VARIABLE}`}
                component={EditPurpose}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;