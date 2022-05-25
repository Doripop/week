import React from "react";
import {Route} from "react-router-dom"
import Week from "./week"
import Next from "./Next"


function App() {
  return (
    <div className="App">
      
      <Route path="/" exact>
        <Week/>
      </Route>
      
      <Route path="/Next/:key">
        <Next/>
      </Route>
      


    </div>
  );
}

export default App;
