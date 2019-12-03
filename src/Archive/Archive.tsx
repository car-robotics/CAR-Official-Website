import React, { Component } from "react";
import './Archive.scss';
import AdvancedGridList, { ArchiveCategory } from './ImageGrid';
import { Typography, MenuList, MenuItem, withStyles, IconButton } from "@material-ui/core";
// import ReactPlayer from "react-player";
import PageFade from "../Utils/PageFade";
import { DocumentTitle } from "../Utils/DocumentTitle";
import { ContentBackground } from "../Utils/ContentBackground";
import GoldDivider from "../Utils/GoldDivider";
import { KeyboardArrowUp } from "@material-ui/icons";

const CollectionItem = withStyles({
    root: {
        fontSize: "1.5rem",
    },
})(MenuItem);

interface ArchiveState { selectedIndex: number }

class Archive extends Component<{}, ArchiveState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedIndex: 0,
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
        
        return (
            <PageFade>
                <div className="archivePageContent">
                    {/* <div id="msgs">
                        <Typography variant='h1' id="archiveWelcome"> Welcome to The Archive</Typography>
                        <Typography variant='h3' id="welcomeMsg">
                            Check out our video compilation and photo gallery of previous competitions and club activities
                        </Typography>
                        <div>
                            <ReactPlayer
                                url="https://www.youtube.com/embed/QIC3dg53WWg"
                                width="64rem"
                                height="36rem"
                                style={{ margin: "auto" }}
                            />
                        </div>
                        <Typography variant='h3' id="checkoutMore">Watch more videos on <Link style={{ color: "#046A38" }} href="https://www.youtube.com/results?search_query=Charlotte+Area+Robotics+" target="_blank">YouTube </Link>
                        </Typography>
                    </div> */}
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
                        <AdvancedGridList section={this.state.selectedIndex} />
                        <IconButton onClick={() => {if (collageDiv) collageDiv[0].scrollTop = 0}} className="collage-scroll-icon" >
                            <KeyboardArrowUp/>
                        </IconButton>
                    </ContentBackground>
                </div>
            </PageFade>
        );
    }
}

export default Archive;