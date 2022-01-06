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

function App() {
  return (
    <div >

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
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
