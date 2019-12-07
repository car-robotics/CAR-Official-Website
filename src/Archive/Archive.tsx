import React, { Component } from "react";
import './Archive.scss';
import AdvancedGridList from './ImageGrid';
import { ArchiveCategory } from "./ImageList";
import { Typography, MenuList, MenuItem, withStyles } from "@material-ui/core";
// import ReactPlayer from "react-player";
import PageFade from "../Utils/PageFade";
import { DocumentTitle } from "../Utils/DocumentTitle";
import { ContentBackground } from "../Utils/ContentBackground";
import GoldDivider from "../Utils/GoldDivider";
import Lightbox from "./Lightbox";
import ScrollToTop from "./ScrollToTop";

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
}

export default class Archive extends Component<{}, ArchiveState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedIndex: 0,
            clickedImage: { clicked: false, img: "", orientation: "horizontal" },
            showSrollTopIcon: false,
            forceScrollToTop: false,
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

        return (
            <PageFade>
                <div className="archivePageContent">

                    <Lightbox
                        {...this.state.clickedImage}
                        handleClickedClose={() => this.setState({ clickedImage: { clicked: false, img: "", orientation: "horizontal" } })}
                    />

                    <ContentBackground elevation={24} className="menu-container">
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

                    <ContentBackground elevation={24} className="collage-container">

                        <Typography variant='h3' className="collage-header">
                            {ArchiveCategory[this.state.selectedIndex].charAt(0).toUpperCase() + ArchiveCategory[this.state.selectedIndex].slice(1)}
                            {" Photos"}
                        </Typography>

                        <GoldDivider />

                        <AdvancedGridList
                            section={this.state.selectedIndex}
                            handleImageClick={handleImageClick}
                            handleScroll={handleScroll}
                        />

                        <ScrollToTop
                            show={this.state.showSrollTopIcon}
                            forceScrollToTop={this.state.forceScrollToTop}
                            resetForceToScroll={() => this.setState({ forceScrollToTop: false })}
                        />
                    </ContentBackground>

                </div>
            </PageFade>
        );
    }
}
