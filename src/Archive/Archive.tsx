import React, { Component } from "react";
import './Archive.scss';
import AdvancedGridList, { ArchiveCategory } from './ImageGrid';
import { Typography, MenuList, MenuItem, withStyles, IconButton, Backdrop } from "@material-ui/core";
// import ReactPlayer from "react-player";
import Image from "material-ui-image";
import PageFade from "../Utils/PageFade";
import { DocumentTitle } from "../Utils/DocumentTitle";
import { ContentBackground } from "../Utils/ContentBackground";
import GoldDivider from "../Utils/GoldDivider";
import { KeyboardArrowUp, Close } from "@material-ui/icons";
import EasyToSeeTooltip from "../Utils/EasyToSeeTooltip";

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

        const collageDiv = document.getElementsByClassName('MuiGridList-root');

        const handleImageClick = (clickedImg: string) => {
            this.setState({ clickedImage: {clicked: true, img: clickedImg} });
        }
        
        return (
            <PageFade>
                <div className="archivePageContent">
                    <Backdrop style={{zIndex: 2000, overflow: "auto"}} open={this.state.clickedImage.clicked}>
                        <EasyToSeeTooltip title="Close">
                            <IconButton 
                                className="close-backdrop-icon" 
                                onClick={() => this.setState({ clickedImage: {clicked: false, img: ""} })} 
                            >
                                <Close htmlColor="#FFF"/>
                            </IconButton>
                        </EasyToSeeTooltip>
                        <Image 
                            src={this.state.clickedImage.img}
                            style={{
                                position: "",
                                paddingTop: "",
                                backgroundColor: "transparent",
                                width: "60%",
                                margin: "auto",
                            }}
                            imageStyle={{
                                height: "",
                                width: "100%",
                                position: "",
                                border: "0.5rem solid #FFF",
                                borderRadius: "1rem",
                            }}
                        />
                    </Backdrop>
                    <ContentBackground className="menu-container">
                        <MenuList>
                            {collectionItems.map((option, index) => {
                                return (
                                    <CollectionItem
                                        selected={index === this.state.selectedIndex}
                                        className="archive-selection"
                                        onClick={() => {this.setState({ selectedIndex: index }); if (collageDiv) collageDiv[0].scrollTop = 0}}
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
                        <div>
                            <EasyToSeeTooltip title="Scroll to Top">
                                <IconButton onClick={() => {if (collageDiv) collageDiv[0].scrollTop = 0}} className="collage-scroll-icon" >
                                    <KeyboardArrowUp/>
                                </IconButton>
                            </EasyToSeeTooltip>
                        </div>
                    </ContentBackground>

                </div>
            </PageFade>
        );
    }
}
