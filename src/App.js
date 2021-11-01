import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import About from './Pages/Home/About/About';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Booking from './Pages/Booking/Booking/Booking';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/AddService/ManageServices/ManageServices';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/booking/:spotId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute exact path="/manageServices">
              <ManageServices></ManageServices>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
