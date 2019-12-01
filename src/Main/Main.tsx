import React, { Component } from "react";
import { createMuiTheme, Slide } from "@material-ui/core";
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

interface MainState { pageIndex: number, reverseMap: boolean }

class Main extends Component<{}, MainState> {

  constructor(props: any) {
    super(props);
    this.state = {
      pageIndex: 0,
      reverseMap: true,
    };
  }

  pages = [
    [<Home />, 0],
    [<About />, 1],
    [<Sponsors />, 2],
    [<Competition />, 3],
    [<Outreach />, 4],
    [<Archive />, 5],
  ]

  componentDidUpdate(prevProps: {}, prevState: MainState) {
    if (prevState.pageIndex > this.state.pageIndex) {
      this.setState({ reverseMap: false });
    } else if (prevState.pageIndex < this.state.pageIndex) {
      this.setState({ reverseMap: true });
    }
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
            {this.state.reverseMap && this.pages.map((page) => {
              return (
                <Slide key={page[1] as number} in={this.state.pageIndex === page[1]} mountOnEnter unmountOnExit direction={"up"} timeout={{ enter: 750, exit: 750 }}>
                  <div>
                    {page[0]}
                  </div>
                </Slide>
              );
            })}
            {!this.state.reverseMap && this.pages.slice(0).reverse().map((page) => {
              return (
                <Slide key={page[1] as number} in={this.state.pageIndex === page[1]} mountOnEnter unmountOnExit direction={"up"} timeout={{ enter: 750, exit: 750 }}>
                  <div>
                    {page[0]}
                  </div>
                </Slide>
              );
            })}
          </div>
        </BreakpointProvider>
      </ThemeProvider>
    );
  }
}

export default Main;