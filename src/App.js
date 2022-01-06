import './App.css';

import Shop from './Components/Home/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/Home/NotFound/NotFound';
import OrderReview from './Components/Home/OrderReview/OrderReview';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Pay from './Components/Home/Pay/Pay';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipping from './Components/Home/Shipping/Shipping';

function App() {
  return (
    <div >

      <AuthProvider>
      <Router>

<Switch>
  <Route exact path="/">
    <Shop></Shop>
  </Route>

  <Route path="/shop">
    <Shop></Shop>
  </Route>
  <Route path="/OrderReview">
    <OrderReview></OrderReview>
  </Route>
  <Route path="/login">
    <Login></Login>
  </Route>
  <Route path="/register">
    <Register></Register>
  </Route>
  <PrivateRoute path="/pay">
    <Pay></Pay>
  </PrivateRoute>
  <PrivateRoute path="/shipping">
    <Shipping></Shipping>
  </PrivateRoute>
  <Route path="*">
    <NotFound></NotFound>
  </Route>

</Switch>

</Router>
      </AuthProvider>

    </div>
  );
}

export default App;
