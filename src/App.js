import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./component/NavBar/NavBar";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import RestAndRes from "./component/ViewAll/RestAndRes";
import { Grid, Image } from "semantic-ui-react";
import * as routes from "./constants/routes";
import UserProfile from './component/UserProfile/UserProfile'

class App extends Component {
  state = {
    currentUser: null
  };

  doSetCurrentUser = user => {
    this.setState({
      currentUser: user
    });
  };

  render() {
    return (
      <div>
        <NavBar
          currentUser={this.state.currentUser}
          doSetCurrentUser={this.doSetCurrentUser}
          doLogout={null}
        />{" "}
        <Switch>
          <Route exact path={routes.HOME} render={() => <div> HOME </div>} />
          <Route exact path={routes.USER} render={() => <UserProfile user={this.state.currentUser}/>} />
          <Route exact path={routes.RESTR} render={() => <RestAndRes currentUser={this.state.currentUser} />} />{" "}
          <Route render={() => <div> NOT FOUND </div>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
