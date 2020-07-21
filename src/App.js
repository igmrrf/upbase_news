import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import SignIn from "./containers/SignIn";
import ReadNews from "./containers/News";
import SignUp from "./containers/SignUp";
import UploadNews from "./containers/Upload";
import NotFound from "./containers/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function SignedIn(bool) {
  return bool;
}

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* {!SignedIn ? (
          <Switch>
            <Route exact path="/" auth={SignedIn}  component={SignUp} />
            <Route exact path="/sign_in" auth={SignedIn}  component={SignIn} />
          </Switch>
        ) : (
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/upload" component={UploadNews} />
              <Route exact path="/view" component={ReadNews} />
              <Route exact path="/news/:news" component={ReadNews} />
              <Route exact path="/category/:category" component={ReadNews} />
            </Switch>
            <Footer />
          </>
          )} */}

        <Route exact path="/" component={Home} />
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/sign_up" component={SignUp} />
        <Route exact path="/upload" component={UploadNews} />
        <Route exact path="/view" component={ReadNews} />
        <Route exact path="/news/:news" component={ReadNews} />
        <Route exact path="/category/:category" component={ReadNews} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
