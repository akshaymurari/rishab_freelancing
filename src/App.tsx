import React from 'react';
import CustomerSignin from './Components/CustomerAuth/CustomerSignin';
import DeliveryBoyLogin from './Components/DeliveryBoyLogin/DeliveryBoyLogin';
import FarmerSignin from './Components/FarmerAuth/FarmerSignin';
import {Switch,Route} from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Welcome}></Route>  
      </Switch>
    </div>
  );
}
export default App;
