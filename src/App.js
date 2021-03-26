import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Route>
          <PrivateRoute exact path="/protected" component={BubblePage} />
          </Route>
          <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute