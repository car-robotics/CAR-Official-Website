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
    orientation: "vertical" | "horizontal";
}

export const tileData: Tile[] = [
    {
        img: '/ReturningMembers.jpg',
        title: 'Returning Members',
        category: ArchiveCategory.all,
        featured: true,
        orientation: "horizontal",
    },
    {
        img: '/Robot1.jpg',
        title: 'Robot',
        category: ArchiveCategory.robot,
        featured: false,
        orientation: "vertical",
    },
    {
        img: '/Robot2.jpg',
        title: 'Robot',
        category: ArchiveCategory.robot,
        featured: false,
        orientation: "vertical",
    },
    {
        img: '/Outreach/ArduinoWksp-6.jpg',
        title: 'Arduino WorkSpace',
        category: ArchiveCategory.outreach,
        featured: true,
        orientation: "horizontal",
    },
    {
        img: '/Outreach/ArduinoWksp-5.jpg',
        title: 'Arduino WorkSpace',
        category: ArchiveCategory.outreach,
        featured: false,
        orientation: "horizontal",
    },
    {
        img: '/Outreach/ArduinoWksp-2.jpg',
        title: 'Arduino WorkSpace',
        category: ArchiveCategory.outreach,
        featured: false,
        orientation: "horizontal",
    },
    {
        img: '/Outreach/ArduinoWksp-8.jpg',
        title: 'Arduino WorkSpace',
        category: ArchiveCategory.outreach,
        featured: true,
        orientation: "horizontal",
    },
    {
        img: '/Outreach/BobsBash1-2.jpg',
        title: 'Bobs Bash',
        category: ArchiveCategory.outreach,
        featured: true,
        orientation: "horizontal",
    },
    {
        img: '/Outreach/BobsBash1-1.jpg',
        title: 'Bobs Bash',
        category: ArchiveCategory.outreach,
        featured: false,
        orientation: "horizontal",
    },
    {
        img: '/Outreach/DiscoveryPlace2.jpg',
        title: 'Discovery Place',
        category: ArchiveCategory.outreach,
        featured: false,
        orientation: "vertical",
    },
    {
        img: '/Outreach/DiscoveryPlace1.jpg',
        title: 'Discovery Place',
        category: ArchiveCategory.outreach,
        featured: true,
        orientation: "vertical",
    },
    {
        img: '/Outreach/Elementary2.jpg',
        title: 'Elementary',
        category: ArchiveCategory.outreach,
        featured: true,
        orientation: "horizontal",
    },
    {
        img: '/Outreach/Elementary1.jpg',
        title: 'Elementary',
        category: ArchiveCategory.outreach,
        featured: false,
        orientation: "horizontal",
    },
    {
        img: '/Outreach/NCScience2.jpg',
        title: 'NCScience',
        category: ArchiveCategory.outreach,
        featured: false,
        orientation: "horizontal",
    },
    {
        img: '/Outreach/NCScience1.jpg',
        title: 'NCScience',
        category: ArchiveCategory.outreach,
        featured: true,
        orientation: "horizontal",
    },
    {
        img: '/SprintReviews/EndofSprint2-1.jpg',
        title: 'Sprint Reviews',
        category: ArchiveCategory.sprintReview,
        featured: true,
        orientation: "vertical",
    },
    {
        img: '/SprintReviews/EndofSprint2-2.jpg',
        title: 'Sprint Reviews',
        category: ArchiveCategory.sprintReview,
        featured: false,
        orientation: "horizontal",
    },
    {
        img: '/SprintReviews/EndofSprint2-3.jpg',
        title: 'Sprint Reviews',
        category: ArchiveCategory.sprintReview,
        featured: false,
        orientation: "horizontal",
    },
    {
        img: '/SprintReviews/EndofSprint2-4.jpg',
        title: 'Sprint Reviews',
        category: ArchiveCategory.sprintReview,
        featured: true,
        orientation: "vertical",
    },
    {
        img: '/SprintReviews/EndofSprint2-5.jpg',
        title: 'Sprint Reviews',
        category: ArchiveCategory.sprintReview,
        featured: false,
        orientation: "horizontal",
    },
    {
        img: '/SprintReviews/EndofSprint2-7.jpg',
        title: 'Sprint Reviews',
        category: ArchiveCategory.sprintReview,
        featured: false,
        orientation: "vertical",
    },
];