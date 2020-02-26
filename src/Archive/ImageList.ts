export enum ArchiveCategory {
  all = 0,
  outreach,
  sprintReview,
  robot
}

export interface Tile {
  img: string;
  title: string;
  category: ArchiveCategory;
  orientation: "vertical" | "horizontal";
  wide?: boolean;
}

export const defaultTileProps: Tile = {
  img: "",
  category: ArchiveCategory.all,
  orientation: "horizontal",
  title: "N/A"
};

const prefix = "/Photos/";

export const tileData: Tile[] = [
  {
    img: prefix + "ReturningMembers.jpg",
    title: "Returning Members",
    category: ArchiveCategory.all,
    orientation: "horizontal",
    wide: true
  },
  {
    img: prefix + "Robot/Robot2020_1.jpg",
    title: "Robot 2020",
    category: ArchiveCategory.robot,
    orientation: "vertical"
  },
  {
    img: prefix + "Robot/Robot2020_2.jpg",
    title: "Robot 2020",
    category: ArchiveCategory.robot,
    orientation: "vertical"
  },
  {
    img: prefix + "Robot/DriveTesting.jpg",
    title: "Drive Team Testing",
    category: ArchiveCategory.robot,
    orientation: "horizontal"
  },
  {
    img: prefix + "Robot/DriveTesting2.jpg",
    title: "Drive Team Testing",
    category: ArchiveCategory.robot,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/Discovery2020_6.jpg",
    title: "Discovery Place 2020",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/Discovery2020_4.jpg",
    title: "Discovery Place 2020",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/Discovery2020_1.jpg",
    title: "Discovery Place 2020",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/Discovery2020_3.jpg",
    title: "Discovery Place 2020",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/Discovery2020_5.jpg",
    title: "Discovery Place 2020",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/Discovery2020_2.jpg",
    title: "Discovery Place 2020",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/Discovery2020_7.jpg",
    title: "Discovery Place 2020",
    category: ArchiveCategory.outreach,
    orientation: "horizontal",
    wide: true
  },
  {
    img: prefix + "Robot/ButtonMech2.jpg",
    title: "Mechanical Button Pushing",
    category: ArchiveCategory.robot,
    orientation: "vertical"
  },
  {
    img: prefix + "Robot/DriveElectrical.jpg",
    title: "Drive Electrical",
    category: ArchiveCategory.robot,
    orientation: "vertical"
  },
  {
    img: prefix + "Outreach/ArduinoWksp-1.jpg",
    title: "Arduino Workshop",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/ArduinoWksp-2.jpg",
    title: "Arduino Workshop",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/ArduinoWksp-3.jpg",
    title: "Arduino Workshop",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/ArduinoWksp-4.jpg",
    title: "Arduino Workshop",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/ArduinoWksp-5.jpg",
    title: "Arduino Workshop",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/ArduinoWksp-6.jpg",
    title: "Arduino Workshop",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/BobsBash1.jpg",
    title: "Bobs Bash",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/BobsBash2.jpg",
    title: "Bobs Bash",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/BobsBash3.jpg",
    title: "Bobs Bash",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/Explore1.jpg",
    title: "Explore",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/DiscoveryPlace1.jpg",
    title: "Discovery Place",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/DiscoveryPlace2.jpg",
    title: "Discovery Place",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/Elementary1.jpg",
    title: "Elementary",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/Elementary2.jpg",
    title: "Elementary",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/NCScience1.jpg",
    title: "NCScience",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Outreach/NCScience2.jpg",
    title: "NCScience",
    category: ArchiveCategory.outreach,
    orientation: "horizontal"
  },
  {
    img: prefix + "Robot/ButtonMechanical1.jpg",
    title: "Mechanical Button Pushing",
    category: ArchiveCategory.robot,
    orientation: "horizontal"
  },
  {
    img: prefix + "Robot/ButtonPushing.jpg",
    title: "Mechanical Button Pushing",
    category: ArchiveCategory.robot,
    orientation: "horizontal"
  },
  {
    img: prefix + "SprintReviews/EndofSprint2-3.jpg",
    title: "Sprint Reviews",
    category: ArchiveCategory.sprintReview,
    orientation: "horizontal"
  },
  {
    img: prefix + "SprintReviews/EndofSprint2-2.jpg",
    title: "Sprint Reviews",
    category: ArchiveCategory.sprintReview,
    orientation: "horizontal"
  },
  {
    img: prefix + "SprintReviews/EndofSprint2-5.jpg",
    title: "Sprint Reviews",
    category: ArchiveCategory.sprintReview,
    orientation: "horizontal"
  },
  {
    img: prefix + "SprintReviews/EndofSprint2-9.jpg",
    title: "Sprint Reviews",
    category: ArchiveCategory.sprintReview,
    orientation: "horizontal"
  },
  {
    img: prefix + "SprintReviews/EndofSprint2-4.jpg",
    title: "Sprint Reviews",
    category: ArchiveCategory.sprintReview,
    orientation: "vertical"
  },
  {
    img: prefix + "SprintReviews/EndofSprint2-7.jpg",
    title: "Sprint Reviews",
    category: ArchiveCategory.sprintReview,
    orientation: "vertical"
  },
  {
    img: prefix + "SprintReviews/EndofSprint2-6.jpg",
    title: "Sprint Reviews",
    category: ArchiveCategory.sprintReview,
    orientation: "vertical"
  },
  {
    img: prefix + "SprintReviews/EndofSprint2-1.jpg",
    title: "Sprint Reviews",
    category: ArchiveCategory.sprintReview,
    orientation: "vertical"
  },
  {
    img: prefix + "Robot/Robot2.jpg",
    title: "Robot",
    category: ArchiveCategory.robot,
    orientation: "horizontal"
  },
  {
    img: prefix + "Robot/Robot2020_3.jpg",
    title: "Robot 2020",
    category: ArchiveCategory.robot,
    orientation: "horizontal"
  },
  {
    img: prefix + "Robot/Robot1.jpg",
    title: "Robot",
    category: ArchiveCategory.robot,
    orientation: "vertical"
  },
  {
    img: prefix + "Robot/Soldering.jpg",
    title: "Soldering",
    category: ArchiveCategory.robot,
    orientation: "vertical"
  }
];
