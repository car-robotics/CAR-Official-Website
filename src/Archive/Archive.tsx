import React, { Component } from "react";
import './Archive.scss';
import AdvancedGridList, { ArchiveCategory } from './ImageGrid';
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
    clickedImage: {clicked: boolean, img: string}
}

export default class Archive extends Component<{}, ArchiveState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedIndex: 0,
            clickedImage: {clicked: false, img: ""},
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

        const handleImageClick = (clickedImg: string) => {
            this.setState({ clickedImage: {clicked: true, img: clickedImg} });
        }

        const scrollToTopButton: HTMLElement = document.getElementsByClassName("collage-scroll-icon")[0] as HTMLElement;
        
        return (
            <PageFade>
                <div className="archivePageContent">

                    <Lightbox 
                        {...this.state.clickedImage} 
                        handleClickedClose={() => this.setState({clickedImage: {clicked: false, img: ""}})} 
                    />

                    <ContentBackground className="menu-container">
                        <MenuList>
                            {collectionItems.map((option, index) => {
                                return (
                                    <CollectionItem
                                        selected={index === this.state.selectedIndex}
                                        className="archive-selection"
                                        onClick={() => {this.setState({ selectedIndex: index }); if (scrollToTopButton) scrollToTopButton.click()}}
                                    >
                                        {option}
                                    </CollectionItem>
                                )
                            })}
                        </MenuList>
                    </ContentBackground>

                    <ContentBackground className="collage-container">

                        <Typography variant='h3' className="collage-header">
                            {ArchiveCategory[this.state.selectedIndex].charAt(0).toUpperCase() + ArchiveCategory[this.state.selectedIndex].slice(1)}
                            {" Photos"}
                        </Typography>

                        <GoldDivider />
                        <AdvancedGridList section={this.state.selectedIndex} handleImageClick={handleImageClick} />
                        <ScrollToTop/>
                    </ContentBackground>

                </div>
            </PageFade>
        );
    }
}
