import React, { Component } from "react";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { BreakpointProvider } from "react-socks";
import Home from "../Home/Home";
import About from "../About/About";
import Outreach from "../Outreach/Outreach";
import Sponsors from "../Sponsors/Sponsors";
import Competition from "../Competition/Competition";
import Archive from "../Archive/Archive";
import NavBar from "./NavBar/NavBar";

const theme = createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: "Inconsolata",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.75rem",
    },
    h3: {
      fontSize: "2.5rem",
    },
    h4: {
      fontSize: "2rem",
    },
    h5: {
      fontSize: "1.75rem",
    },
    h6: {
      fontSize: "1.5rem",
    },
  },
});

interface MainState { pageIndex: number }

class Main extends Component<{}, MainState> {

  constructor(props: any) {
    super(props);
    this.state = {
      pageIndex: 0
    };
  }

  render() {

    const navSelectionIndex = (i: number) => {
      this.setState({ pageIndex: i });
    }

    return (
      <ThemeProvider theme={theme}>
        <BreakpointProvider>
          <NavBar navSelectionIndex={navSelectionIndex} />
          <div className="content">
            {this.state.pageIndex === 0 && <Home />}
            {this.state.pageIndex === 1 && <About />}
            {this.state.pageIndex === 2 && <Sponsors />}
            {this.state.pageIndex === 3 && <Competition />}
            {this.state.pageIndex === 4 && <Outreach />}
            {this.state.pageIndex === 5 && <Archive />}
          </div>
        </BreakpointProvider>
      </ThemeProvider>
    );
  }
}

export default Main;