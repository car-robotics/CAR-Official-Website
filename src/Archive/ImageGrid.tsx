
import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import Image from "material-ui-image";
import { tileData, ArchiveCategory, Tile } from './ImageList';
import './Archive.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      height: "90%",
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.25))',
      height: "fit-content",
      fontFamily: "Inconsolata",
      padding: "0.5rem",
    },
  }),
);

interface ImageGridProps {
  section: ArchiveCategory;
  handleImageClick: (clickedImg: Tile) => void;
  handleScroll: (e: React.UIEvent<HTMLElement>) => void;
  mobile: boolean;
}

export default function ImageGrid(props: ImageGridProps) {
  const classes = useStyles();

  return (
    <div className={classes.root} onScroll={(e) => props.handleScroll(e)}>
      <GridList spacing={1} cellHeight="auto" className="gridList">
        {tileData.map(tile => (
          (tile.category === props.section || props.section === ArchiveCategory.all) &&
          <GridListTile
            key={tile.img}
            cols={tile.orientation === "horizontal" ? 2 : 1}
            rows={tile.orientation === "horizontal" ? 1 : 2}
            style={{ padding: "0.25rem" }}
          >
            <Image
              src={tile.img}
              onClick={() => props.handleImageClick(tile)}
              style={{
                backgroundColor: "transparent",
                paddingTop: tile.orientation === "horizontal" ? "calc(75%)" : "calc(100%)",
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