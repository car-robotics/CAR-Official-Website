import React, { Component } from "react";
import './Archive.scss';
import ImageGrid from './ImageGrid';
import { ArchiveCategory, Tile, defaultTileProps } from "./ImageList";
import { Typography, MenuList, MenuItem, Grow, ClickAwayListener, Paper, Divider, Tooltip, Button } from "@material-ui/core";
import PageFade from "../Utils/PageFade";
import { DocumentTitle } from "../Utils/DocumentTitle";

import Lightbox from "./Lightbox";
import ScrollToTop from "./ScrollToTop";
import { MobileContext } from "../Context/MobileContext";

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
            if (collageDiv.scrollTop > 500 && !this.state.showSrollTopIcon) {
                this.setState({ showSrollTopIcon: true })
            } else if (collageDiv.scrollTop <= 500 && this.state.showSrollTopIcon) {
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
                        <main className="archivePageContent">

                            <Lightbox
                                clicked={this.state.clickedImage.clicked}
                                clickedImg={this.state.clickedImage.imgProps}
                                handleClickedClose={() => this.setState({ clickedImage: { clicked: false, imgProps: defaultTileProps } })}
                            />

                            <Paper elevation={24} className="collage-container">

                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <ClickAwayListener onClickAway={() => this.setState({ showMenu: false })}>
                                        <Tooltip title="Picture Filter Menu" enterDelay={300}>
                                            <Button
                                                onClick={() => this.setState({ showMenu: !this.state.showMenu })}
                                                style={{
                                                    margin: "auto",
                                                    textTransform: "none"
                                                }}
                                            >
                                                <Typography variant='h3' className="collage-header">
                                                    {collageHeaderString}
                                                </Typography>
                                            </Button>
                                        </Tooltip>
                                    </ClickAwayListener>
                                </div>

                                <Grow unmountOnExit mountOnEnter in={this.state.showMenu}>
                                    <Paper className="menu-container-popout">
                                        <MenuList>
                                            {collectionItems.map((option, index) => {
                                                return (
                                                    <MenuItem
                                                        key={option}
                                                        selected={index === this.state.selectedIndex}
                                                        className="archive-selection"
                                                        onClick={
                                                            () => {
                                                                // Scroll to top of image collage on menu selection
                                                                document.getElementById('image-collage')!.scrollTop = 0;
                                                                this.setState({ selectedIndex: index });
                                                            }
                                                        }
                                                    >
                                                        {option}
                                                    </MenuItem>
                                                )
                                            })}
                                        </MenuList>
                                    </Paper>
                                </Grow>

                                <Divider style={{ margin: "0", marginBottom: "0.5rem" }} />

                                <ImageGrid
                                    section={this.state.selectedIndex}
                                    handleImageClick={handleImageClick}
                                    handleScroll={handleScroll}
                                    mobile={mobile}
                                />

                                <ScrollToTop
                                    show={this.state.showSrollTopIcon}
                                    style={{ padding: mobile ? "6px" : "" }}
                                />
                            </Paper>

                        </main>
                    </PageFade>
                )
                }
            </MobileContext.Consumer>
        );
    }
}
