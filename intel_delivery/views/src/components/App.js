import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import logo from '../images/logo.svg';
import '../css/App.css';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import Payment from '../pages/Payment/Payment';
import NotFoundPage from '../pages/notFoundPage';
import Footer from '../components/Footer'; 
import ManageDelivery from '../pages/DeliveryManagement/ManageDelivery';
import CreateDelivery from '../pages/DeliveryManagement/CreateDelivery';

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component = {SignIn} ></Route>
          <Route exact path={"/register"} component = {SignUp} />
          <Route exact path={"/manage"} component = {ManageDelivery} />
          <Route exact path={"/payment/:id"} component = {Payment} />
          <Route exact path={"/createDelivery"} component = {CreateDelivery} />
          <Route path="/404" component={NotFoundPage}></Route>
          <Redirect from="*" to="/404" />
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
