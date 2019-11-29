import React, { Component } from "react";
import './Archive.scss';
import AdvancedGridList from './ImageGrid';
import { Typography, Link } from "@material-ui/core";
import PageFade from "../Main/PageFade";
import { DocumentTitle } from "../Main/DocumentTitle";


class Archive extends Component {
    render() {
        DocumentTitle({title: "Archive"});
        return (
            <PageFade>
                <div className="archivePageContent">
                    <div id="msgs">
                        <Typography variant='h1' id="archiveWelcome"> Welcome to The Archive</Typography>
                        <Typography variant='h3' id="welcomeMsg">Check out our video compilation and photo gallery of previous competitions and club activities</Typography>
                        <div id="video">
                            <iframe
                                src="https://www.youtube.com/embed/QIC3dg53WWg"
                                width="950px"
                                height="550px"
                                className="archiveVideos"
                                title="CAR_CompilationVid"
                                allowFullScreen
                            />
                        </div>
                        <Typography variant='h3' id="checkoutMore">Watch more videos on <Link style={{ color: "#046A38" }} href="https://www.youtube.com/results?search_query=Charlotte+Area+Robotics+" target="_blank">YouTube </Link>
                        </Typography>
                    </div>
                    <div id="photoSection">
                        <Typography variant='h3' id="photoGal"> - Photo Gallery - </Typography>
                        <AdvancedGridList />
                    </div>
                </div>
            </PageFade>
        );
    }
}

export default Archive;