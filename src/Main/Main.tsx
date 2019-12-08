import React, { Component } from "react";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { BreakpointProvider } from "react-socks";
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

const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: "Inconsolata",
      fontWeight: 700,
    },
  },
}));


class Main extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <HashRouter>
          <BreakpointProvider>
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
          </BreakpointProvider>
        </HashRouter>
      </ThemeProvider>
    );
  }
}

export default Main;