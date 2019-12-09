import React, { Component } from "react";
import './Archive.scss';
import AdvancedGridList from './ImageGrid';
import { ArchiveCategory } from "./ImageList";
import { Typography, MenuList, MenuItem, withStyles, IconButton, Grow, ClickAwayListener } from "@material-ui/core";
import PageFade from "../Utils/PageFade";
import { DocumentTitle } from "../Utils/DocumentTitle";
import { ContentBackground } from "../Utils/ContentBackground";
import GoldDivider from "../Utils/GoldDivider";
import Lightbox from "./Lightbox";
import ScrollToTop from "./ScrollToTop";
import { MobileContext } from "../Context/MobileContext";
import { MoreVert } from "@material-ui/icons";
import { COLORS } from "../Utils/COLORS";

const CollectionItem = withStyles({
    root: {
        fontSize: "1.5rem",
    },
})(MenuItem);

interface ArchiveState {
    selectedIndex: number,
    clickedImage: { clicked: boolean, img: string, orientation: "vertical" | "horizontal" },
    showSrollTopIcon: boolean,
    forceScrollToTop: boolean,
    showMenu: boolean,
}

export default class Archive extends Component<{}, ArchiveState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedIndex: 0,
            clickedImage: { clicked: false, img: "", orientation: "horizontal" },
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

        const handleImageClick = (clickedImg: string, orientation: "vertical" | "horizontal") => {
            this.setState({ clickedImage: { clicked: true, img: clickedImg, orientation: orientation, } });
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
                                {...this.state.clickedImage}
                                handleClickedClose={() => this.setState({ clickedImage: { clicked: false, img: "", orientation: "horizontal" } })}
                            />

                            {!mobile && <ContentBackground elevation={24} className="menu-container">
                                <MenuList>
                                    {collectionItems.map((option, index) => {
                                        return (
                                            <CollectionItem
                                                key={option}
                                                selected={index === this.state.selectedIndex}
                                                className="archive-selection"
                                                onClick={() => { this.setState({ selectedIndex: index }); if (!this.state.forceScrollToTop) this.setState({ forceScrollToTop: true }) }}
                                            >
                                                {option}
                                            </CollectionItem>
                                        )
                                    })}
                                </MenuList>
                            </ContentBackground>}

                            <Grow in={mobile && this.state.showMenu}>
                                <ContentBackground className="menu-container-popout">
                                    <MenuList>
                                        {collectionItems.map((option, index) => {
                                            return (
                                                <CollectionItem
                                                    key={option}
                                                    selected={index === this.state.selectedIndex}
                                                    className="archive-selection"
                                                    onClick={() => { this.setState({ selectedIndex: index }); if (!this.state.forceScrollToTop) this.setState({ forceScrollToTop: true }) }}
                                                >
                                                    {option}
                                                </CollectionItem>
                                            )
                                        })}
                                    </MenuList>
                                </ContentBackground>
                            </Grow>

                            <ContentBackground elevation={24} className="collage-container">

                                <Typography variant='h3' className="collage-header">
                                    {collageHeaderString}
                                </Typography>

                                {mobile &&
                                    <ClickAwayListener onClickAway={() => this.setState({ showMenu: false })}>
                                        <IconButton title={this.state.showMenu ? "Show Menu" : "Close Menu"} onClick={() => this.setState({ showMenu: !this.state.showMenu })} style={{ position: "absolute", right: "1rem", top: "10%" }}>
                                            <MoreVert fontSize="default" htmlColor={COLORS.mainWhite} />
                                        </IconButton>
                                    </ClickAwayListener>}

                                <GoldDivider />

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
                            </ContentBackground>

                        </div>
                    </PageFade>
                )
                }
            </MobileContext.Consumer>
        );
    }
}
