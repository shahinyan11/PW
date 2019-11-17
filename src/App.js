import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect} from "react-redux";
import PrivateRouter from "./components/PrivateRouter";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import {getUserInfo} from "./store/actions";

class App extends Component {

    componentWillMount() {
        if (localStorage.getItem('id_token')) {
            this.props.getUserInfo();
        }
    }

  render (){
      return (
          <BrowserRouter>
              <div>
                  <Switch>
                      <PrivateRouter exact path='/' component={Home}/>
                      <Route exact path='/login' component={Login}/>
                      <PrivateRouter exact path='/home' component={Home}/>
                      {/*<Route component={Page404}/>*/}
                  </Switch>
              </div>
          </BrowserRouter>
      );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
    getUserInfo
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default AppContainer;
