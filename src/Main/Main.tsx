import React, { Component } from "react";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { BreakpointProvider } from "react-socks";
import Home from "../Home/Home";
import About from "../About/About";
import Outreach from "../Outreach/Outreach";
import Sponsors from "../Sponsors/Sponsors";
import Competition from "../Competition/Competition";
import Archive from "../Archive/Archive";
import NavBar from "./NavBar";

const theme = createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: "Inconsolata",
    }
    // h2: {
    //   fontFamily: "Inconsolata",
    //   fontSize: "2.75rem",
    //   fontWeight: 700,
    // },
    // h3: {
    //   fontFamily: "Inconsolata",
    //   fontSize: "2.5rem",
    //   fontWeight: 700,
    // },
    // h4: {
    //   fontFamily: "Inconsolata",
    //   fontSize: "2rem",
    //   fontWeight: 700,
    // },
    // h5: {
    //   fontFamily: "Inconsolata",
    //   fontSize: "1.75rem",
    //   fontWeight: 700,
    // },
    // h6: {
    //   fontFamily: "Inconsolata",
    //   fontSize: "1.5rem",
    //   fontWeight: 700,
    // },
  },
});

class Main extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <BreakpointProvider>
          <BrowserRouter>
            <NavBar />
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/outreach" component={Outreach} />
                <Route path="/sponsors" component={Sponsors} />
                <Route path="/competition" component={Competition} />
                <Route path="/archive" component={Archive} />
                <Route component={Home} />
              </Switch>
            </div>
          </BrowserRouter>
        </BreakpointProvider>
      </ThemeProvider>
    );
  }
}

export default Main;