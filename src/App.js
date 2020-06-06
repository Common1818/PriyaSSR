import React from "react";
import Jcomp from "./jq";
import CardComp from "./cardComp";
import { Switch, Route, NavLink } from "react-router-dom";
import BookContextProvider from "./contexts/bookContext";

function App({ display }) {
  return (
    <div className="App">
      Whatever hey nadhfaoh;foahrojh;a
      <div>{display}</div>
      <ul>
        <li>
          <NavLink to="/card">card</NavLink>
        </li>
        <li>
          <NavLink to="/jcomp">jcomp</NavLink>
        </li>
      </ul>
      <BookContextProvider>
        <Switch>
          <Route exact path="/card" component={CardComp} />
          <Route exact path="/jcomp" component={Jcomp} />
        </Switch>
      </BookContextProvider>
    </div>
  );
}

export default App;
