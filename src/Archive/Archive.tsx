import React, { Component } from "react";
import './Archive.scss';
import AdvancedGridList from './ImageGrid';
import { ArchiveCategory, Tile, defaultTileProps } from "./ImageList";
import { Typography, MenuList, MenuItem, IconButton, Grow, ClickAwayListener, Paper, Divider } from "@material-ui/core";
import PageFade from "../Utils/PageFade";
import { DocumentTitle } from "../Utils/DocumentTitle";

import Lightbox from "./Lightbox";
import ScrollToTop from "./ScrollToTop";
import { MobileContext } from "../Context/MobileContext";
import { MoreVert } from "@material-ui/icons";

interface ArchiveState {
    selectedIndex: number,
    clickedImage: { clicked: boolean, imgProps: Tile },
    showSrollTopIcon: boolean,
    forceScrollToTop: boolean,
    showMenu: boolean,
}

export default class Archive extends Component<{}, ArchiveState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedIndex: 0,
            clickedImage: { clicked: false, imgProps: defaultTileProps },
            showSrollTopIcon: false,
            forceScrollToTop: false,
            showMenu: false,
        };
    }

    render() {
        DocumentTitle({ title: "Archive" });

        const collectionItems = [
            "All",
            "Outreach/Events",
            "Sprint Reviews",
            "The Robot",
        ]

        const handleImageClick = (clickedImg: Tile) => {
            this.setState({ clickedImage: { clicked: true, imgProps: clickedImg } });
        }

        const handleScroll = (e: React.UIEvent<HTMLElement>) => {
            const collageDiv = e.currentTarget.children[0];
            if (collageDiv.scrollTop > 500) {
                this.setState({ showSrollTopIcon: true })
            } else if (this.state.showSrollTopIcon === true) {
                this.setState({ showSrollTopIcon: false })
            }
        }

        // Capitalize the first letter and add a space before every subsequent capital letter
        const collageHeaderString =
            ArchiveCategory[this.state.selectedIndex].charAt(0).toUpperCase() +
            ArchiveCategory[this.state.selectedIndex].slice(1).replace(/([A-Z])/g, " $1") +
            " Photos";

        return (
            <MobileContext.Consumer>
                {mobile => (
                    <PageFade>
                        <div className="archivePageContent">

                            <Lightbox
                                clicked={this.state.clickedImage.clicked}
                                clickedImg={this.state.clickedImage.imgProps}
                                handleClickedClose={() => this.setState({ clickedImage: { clicked: false, imgProps: defaultTileProps } })}
                            />

                            {!mobile && <Paper elevation={24} className="menu-container">
                                <MenuList>
                                    {collectionItems.map((option, index) => {
                                        return (
                                            <MenuItem
                                                key={option}
                                                selected={index === this.state.selectedIndex}
                                                className="archive-selection"
                                                onClick={() => { this.setState({ selectedIndex: index }); if (!this.state.forceScrollToTop) this.setState({ forceScrollToTop: true }) }}
                                            >
                                                {option}
                                            </MenuItem>
                                        )
                                    })}
                                </MenuList>
                            </Paper>}

                            <Grow in={mobile && this.state.showMenu}>
                                <Paper className="menu-container-popout">
                                    <MenuList>
                                        {collectionItems.map((option, index) => {
                                            return (
                                                <MenuItem
                                                    key={option}
                                                    selected={index === this.state.selectedIndex}
                                                    className="archive-selection"
                                                    onClick={() => { this.setState({ selectedIndex: index }); if (!this.state.forceScrollToTop) this.setState({ forceScrollToTop: true }) }}
                                                >
                                                    {option}
                                                </MenuItem>
                                            )
                                        })}
                                    </MenuList>
                                </Paper>
                            </Grow>

                            <Paper elevation={24} className="collage-container">

                                <Typography variant='h3' className="collage-header">
                                    {collageHeaderString}
                                </Typography>

                                {mobile &&
                                    <ClickAwayListener onClickAway={() => this.setState({ showMenu: false })}>
                                        <IconButton
                                            title={this.state.showMenu ? "Show Menu" : "Close Menu"}
                                            onClick={() => this.setState({ showMenu: !this.state.showMenu })}
                                            style={{ position: "absolute", right: "6vw", top: "10%" }}
                                        >
                                            <MoreVert fontSize="default" color="action" />
                                        </IconButton>
                                    </ClickAwayListener>}

                                <Divider />

                                <AdvancedGridList
                                    section={this.state.selectedIndex}
                                    handleImageClick={handleImageClick}
                                    handleScroll={handleScroll}
                                    mobile={mobile}
                                />

                                <ScrollToTop
                                    show={this.state.showSrollTopIcon}
                                    forceScrollToTop={this.state.forceScrollToTop}
                                    resetForceToScroll={() => this.setState({ forceScrollToTop: false })}
                                    style={{ padding: mobile ? "6px" : "" }}
                                />
                            </Paper>

                        </div>
                    </PageFade>
                )
                }
            </MobileContext.Consumer>
        );
    }
}
