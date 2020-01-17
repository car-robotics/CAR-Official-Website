export enum ArchiveCategory {
    all = 0,
    outreach,
    sprintReview,
    robot,
}

export interface Tile {
    img: string;
    title: string;
    category: ArchiveCategory;
    orientation: "vertical" | "horizontal";
}

export const defaultTileProps: Tile = {
    img: "",
    category: ArchiveCategory.all,
    orientation: "horizontal",
    title: "N/A",
}

export const tileData: Tile[] = [
    {
        img: 'https://drive.google.com/uc?export=view&id=15Q2sGXoMK2ADQtpZR3wvlYaBr8MP_RyF',
        title: 'Returning Members',
        category: ArchiveCategory.all,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=15lbcwIvLAa5jcbaF_XVFglfuYqrv-Z92',
        title: 'Robot',
        category: ArchiveCategory.robot,
        orientation: "vertical",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1unQMJQMQakVr2b8YTP4aEojAfjHrtcM3',
        title: 'Soldering',
        category: ArchiveCategory.robot,
        orientation: "vertical",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=15WVitc2Vo_QnkJqFmrMxNm2LLTHmTBo_',
        title: 'Robot',
        category: ArchiveCategory.robot,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1L_yE-z63yWyykQFGuj9slNJKXvw87GCO',
        title: 'Arduino Workshop',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1SDqUMM77asBOHKTDMZ31Rv0biSgx4KEo',
        title: 'Arduino Workshop',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1AVeRmitYuQB4BQdR4NOg59dGbaUxzVpv',
        title: 'Arduino Workshop',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1ozACQBFgdbZeZZXb_FjOCBcf3OD2t3mR',
        title: 'Arduino Workshop',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1IxXCcA_MLuqrV8tCXS_-Ib6QbEWQYQ6I',
        title: 'Arduino Workshop',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1f44C7WbcHOKwzTCwt_hASqPqiDtjVqO7',
        title: 'Arduino Workshop',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1wimDvKC-9pW_9bDrkM4q0E_3Xlf4X9Pl',
        title: 'Bobs Bash',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1KaCzUrJopmjdKtp0M87RT3Yjeo5kmPbR',
        title: 'Bobs Bash',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1dUri7ONM9qSbZm2NW_7hTeM0cy_vILQu',
        title: 'Bobs Bash',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1TMJxW7KqfX47BdNay-RfR4jXgahsmqRh',
        title: 'Discovery Place',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1dXK91ri7c0C2lDZl1eJft9RWPbjZdu8H',
        title: 'Discovery Place',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1dz2PQG1vw3q8og7SZq8-6gJDT-ITun_C',
        title: 'Elementary',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1YZ59cR_jcxaNf9MiuXF1vVA_MrveQn1k',
        title: 'Elementary',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=14hEOKFzLnsOCQg7Igv6M-wo7_S0pWiTg',
        title: 'Explore',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1izxTvcLUHaaTGFRdwUY7ZaMX-BCyFPsl',
        title: 'NCScience',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1NNG8Kqh1whO3F8fO4nyBrIQP5jFZ-DWu',
        title: 'NCScience',
        category: ArchiveCategory.outreach,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1Gs9RPgKRNH6JYjYprOPkRkGnxHzSmRau',
        title: 'Sprint Reviews',
        category: ArchiveCategory.sprintReview,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1e3Zhr9Xwqf2ub2nFomB9JnohmGBK_Tvk',
        title: 'Mechanical Button Pushing',
        category: ArchiveCategory.robot,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1DsEHEO2ETW8uSMoSuVc4YF_Sd53EdxVf',
        title: 'Mechanical Button Pushing',
        category: ArchiveCategory.robot,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1i-WJpFZ6KzuXA5SQG046VmU8-92O0TmR',
        title: 'Sprint Reviews',
        category: ArchiveCategory.sprintReview,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1l36vFtwrBcsrucV36VpUH91Vd6Em3N9v',
        title: 'Sprint Reviews',
        category: ArchiveCategory.sprintReview,
        orientation: "vertical",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1ZwH4rzjGwUmPIbqm2bobwCSCtWGlkTXl',
        title: 'Sprint Reviews',
        category: ArchiveCategory.sprintReview,
        orientation: "vertical",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1jxHPBqly4Pa8XL9kNn1AueC9VWSeqiEf',
        title: 'Sprint Reviews',
        category: ArchiveCategory.sprintReview,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1t5W6IPIlplfNMBbNJgIEpQsqgEniJc8X',
        title: 'Sprint Reviews',
        category: ArchiveCategory.sprintReview,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1ul87AM1Fs8KYT1JoO_Zetxp34S0hZS8M',
        title: 'Sprint Reviews',
        category: ArchiveCategory.sprintReview,
        orientation: "vertical",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1iUozk38XRnR1T6qh1j8Od5_th3SEHiBp',
        title: 'Sprint Reviews',
        category: ArchiveCategory.sprintReview,
        orientation: "vertical",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1aWFNg7g2YvUUaAr73Lp0y8IBv-bnASs-',
        title: 'Sprint Reviews',
        category: ArchiveCategory.sprintReview,
        orientation: "horizontal",
    },
    {
        img: 'https://drive.google.com/uc?export=view&id=1DpbLZzWOnnqztb7d6F3h_XxQNMuteKhc',
        title: 'Drive Electrical',
        category: ArchiveCategory.robot,
        orientation: "vertical",
    },
];