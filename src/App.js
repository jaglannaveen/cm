import React from "react";
import Header from "./components1/layout1/Header1";
import Contacts from "./components1/Contacts1/Contacts1";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context1";
import Addcontact from "./components1/Contacts1/Addcontact1";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components1/Pages/About";
import NotFound from "./components1/Pages/NotFound";
import test from "./components1/tests/test";
import EditContact from "./components1/Contacts1/EditContact";
function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="contactmanager" />
          <div className="container">
            <Switch>
              <Route exact path="/contact/add" component={Addcontact} />
              <Route exact path="/contact/edit/:id" component={EditContact}/>
              <Route exact path="/" component={Contacts} />

              <Route exact path="/about" component={About} />
              <Route exact path="/tests" component={test} />
              <Route  exact component={NotFound} />
              
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
