
import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import Image from "material-ui-image";
import './Archive.scss';
import { COLORS } from '../Utils/COLORS';
import { tileData, ArchiveCategory } from './ImageList';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: COLORS.darkColor,
      height: "90%",
    },
    gridList: {
      width: "100%",
      height: "100%",
      transform: 'translateZ(0)',
      scrollBehavior: "smooth",
      cursor: "pointer",
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.25))',
    },
  }),
);

interface ImageGridProps {
  section: ArchiveCategory;
  handleImageClick: (clickedImg: string, orientation: "vertical" | "horizontal") => void;
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
              onClick={() => props.handleImageClick(tile.img, tile.orientation)}
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