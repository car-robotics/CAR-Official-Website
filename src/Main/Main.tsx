import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import Home from "../Home/Home";
import About from "../About/About";
import Outreach from "../Outreach/Outreach";
import Sponsors from "../Sponsors/Sponsors";
import Competition from "../Competition/Competition";
import Archive from "../Archive/Archive";
import NavBar from "./NavBar/NavBar";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Footer from "./Footer/Footer";
import MobileContextProvider from "../Context/MobileContext";
import { theme } from "../Themes/MuiThemeCreator";

class Main extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <HashRouter>
          <MobileContextProvider>
            <NavBar />
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/sponsors" component={Sponsors} />
                <Route path="/competition" component={Competition} />
                <Route path="/outreach" component={Outreach} />
                <Route path="/archive" component={Archive} />
                <Redirect to="/" />
              </Switch>
            </div>
            <Footer />
          </MobileContextProvider>
        </HashRouter>
      </ThemeProvider>
    );
  }
}

export default Main;