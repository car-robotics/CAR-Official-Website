
import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import Image from "material-ui-image";
import './Archive.scss';
import { COLORS } from '../Utils/COLORS';

export enum ArchiveCategory {
  all = 0,
  outreach,
  sprintReview,
  robot,
}

interface Tile {
  img: string;
  title: string;
  category: ArchiveCategory;
  featured: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: COLORS.darkBlue,
      height: "90%",
    },
    gridList: {
      width: "100%",
      height: "100%",
      transform: 'translateZ(0)',
      scrollBehavior: "smooth",
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.25))',
    },
  }),
);

const tileData: Tile[] = [
  {
    img: '/ReturningMembers.jpg',
    title: 'Returning Members',
    category: ArchiveCategory.all,
    featured: true,
  },
  {
    img: '/Robot1.jpg',
    title: 'Robot',
    category: ArchiveCategory.robot,
    featured: false,
  },
  {
    img: '/Robot2.jpg',
    title: 'Robot',
    category: ArchiveCategory.robot,
    featured: false,
  },
  {
    img: '/Outreach/ArduinoWksp-6.jpg',
    title: 'Arduino WorkSpace',
    category: ArchiveCategory.outreach,
    featured: true,
  },
  {
    img: '/Outreach/ArduinoWksp-5.jpg',
    title: 'Arduino WorkSpace',
    category: ArchiveCategory.outreach,
    featured: false,
  },
  {
    img: '/Outreach/ArduinoWksp-2.jpg',
    title: 'Arduino WorkSpace',
    category: ArchiveCategory.outreach,
    featured: false,
  },
  {
    img: '/Outreach/ArduinoWksp-8.jpg',
    title: 'Arduino WorkSpace',
    category: ArchiveCategory.outreach,
    featured: true,
  },
  {
    img: '/Outreach/BobsBash1-2.jpg',
    title: 'Bobs Bash',
    category: ArchiveCategory.outreach,
    featured: true,
  },
  {
    img: '/Outreach/BobsBash1-1.jpg',
    title: 'Bobs Bash',
    category: ArchiveCategory.outreach,
    featured: false,
  },
  {
    img: '/Outreach/DiscoveryPlace2.jpg',
    title: 'Discovery Place',
    category: ArchiveCategory.outreach,
    featured: false,
  },
  {
    img: '/Outreach/DiscoveryPlace1.jpg',
    title: 'Discovery Place',
    category: ArchiveCategory.outreach,
    featured: true,
  },
  {
    img: '/Outreach/Elementary2.jpg',
    title: 'Elementary',
    category: ArchiveCategory.outreach,
    featured: true,
  },
  {
    img: '/Outreach/Elementary1.jpg',
    title: 'Elementary',
    category: ArchiveCategory.outreach,
    featured: false,
  },
  {
    img: '/Outreach/NCScience2.jpg',
    title: 'NCScience',
    category: ArchiveCategory.outreach,
    featured: false,
  },
  {
    img: '/Outreach/NCScience1.jpg',
    title: 'NCScience',
    category: ArchiveCategory.outreach,
    featured: true,
  },
  {
    img: '/SprintReviews/EndofSprint2-1.jpg',
    title: 'Sprint Reviews',
    category: ArchiveCategory.sprintReview,
    featured: true,
  },
  {
    img: '/SprintReviews/EndofSprint2-2.jpg',
    title: 'Sprint Reviews',
    category: ArchiveCategory.sprintReview,
    featured: false,
  },
  {
    img: '/SprintReviews/EndofSprint2-3.jpg',
    title: 'Sprint Reviews',
    category: ArchiveCategory.sprintReview,
    featured: false,
  },
  {
    img: '/SprintReviews/EndofSprint2-4.jpg',
    title: 'Sprint Reviews',
    category: ArchiveCategory.sprintReview,
    featured: true,
  },
  {
    img: '/SprintReviews/EndofSprint2-5.jpg',
    title: 'Sprint Reviews',
    category: ArchiveCategory.sprintReview,
    featured: false,
  },
  {
    img: '/SprintReviews/EndofSprint2-7.jpg',
    title: 'Sprint Reviews',
    category: ArchiveCategory.sprintReview,
    featured: false,
  },
];

interface ImageGridProps {
  section: ArchiveCategory;
  handleImageClick: (clickedImg: string) => void;
  handleScroll: (e: React.UIEvent<HTMLElement>) => void;
}

export default function AdvancedGridList(props: ImageGridProps) {
  const classes = useStyles();

  return (
    <div className={classes.root} onScroll={(e) => props.handleScroll(e)}>
      <GridList cellHeight={340} spacing={1} className={classes.gridList}>
        {tileData.map(tile => (
          (tile.category === props.section || props.section === ArchiveCategory.all) &&
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1} >
            <Image
              src={tile.img}
              onClick={() => props.handleImageClick(tile.img)}
              style={{
                backgroundColor: "transparent",
              }}
              imageStyle={{
                height: "",
              }}
            />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}