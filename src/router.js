import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UsersList from "./components/users-list";
import UserDetails from "./components/user-details";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={UsersList} />
        <Route exact path="/users" component={UsersList} />
        <Route exact path="/users/:slug" component={UserDetails} />
      </Router>
    </Provider>
  );
}
