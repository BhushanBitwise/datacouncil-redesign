/**
 * Data Council placement data (posters se liya gaya: naam + company).
 * `id` = /public/images/placements/{id}.webp wali poster ka number.
 */
export type Placement = {
  id: number;
  name: string;
  company: string;
};

const RAW: [number, string, string][] = [
  [1, "Kshitij Rampurkar", "Web Beta Pvt Ltd"],
  [2, "Lajari D.", "Kisna Diamond & Gold Jewellery"],
  [3, "Ashish Mankar", "Practus"],
  [4, "Vinayak G.", "Accenture"],
  [5, "Rahul B.", "Kanalytics"],
  [6, "Pritam Khulpe", "Yash Technologies"],
  [7, "Parag Lichade", "Brillio"],
  [8, "Neha B.", "ScatterPie Analytics"],
  [9, "Ankit B.", "Kanini"],
  [10, "Shreyash Bagde", "AWS"],
  [11, "Arpita N.", "TCS"],
  [12, "Anisha Walde", "Unisoft Technologies"],
  [13, "Akshay Z.", "L&T"],
  [14, "Mayur P.", "Neon Ideas"],
  [15, "Sufiyan S.", "Wallero"],
  [16, "Dravesh R.", "MasterSoft"],
  [17, "Apurva P.", "Creditt"],
  [18, "Shweta Baviskar", "LoanTap Financial Technologies"],
  [19, "Pratik S.", "DigiDrub"],
  [20, "Praful K.", "Cherise India Pvt. Ltd."],
  [21, "Pooja S.", "Benzy Infotech Pvt. Ltd."],
  [22, "Hemant O.", "Zidio Development"],
  [23, "Gautam C.", "Conversion Pro LLP"],
  [24, "Dhanajay T.", "Spotbus Inc"],
  [25, "Chaitanya P.", "Demandify Media"],
  [26, "Anuj Rindhe", "Zoth"],
  [27, "Aishwarya", "SecureLayer7"],
  [28, "Sudharshan Kolhe", "India Meteorological Department"],
  [29, "Priti B.", "Emergys"],
  [30, "Mayuri U.", "Dropouts Technologies LLP"],
  [31, "Manisha K.", "ProDT Consulting Services"],
  [32, "Jay K.", "CS Tech AI"],
  [33, "Girish L.", "Tech Mahindra"],
  [34, "Durgesh S.", "Universal Consultancy LLP"],
  [35, "Ayush B.", "Compumatrix Technologies Pvt Ltd"],
  [36, "Deepika P.", "Vishvanath Media Group"],
  [37, "Ajay Jangid", "Infotact Solutions"],
  [38, "Adarsh R.", "Scriptbox"],
  [39, "Tejashree Gangan", "Datanomy Technologies Ltd"],
  [40, "Smita T.", "Polestar Solutions & Services"],
  [41, "Rahul K.", "Software Pundits"],
  [42, "Pooja V.", "GeniaTEQ Pvt Ltd"],
  [43, "Payal M.", "Khurafat Media"],
  [44, "Rajat K.", "Rock Paper Scissors Studio LLP"],
  [45, "Rakshanda P.", "Nexapp Technologies Pvt Ltd"],
  [46, "Rahul Sharma", "Valad Infotech Solutions"],
  [47, "Ravi P.", "CandiClie Consultancy Pvt Ltd"],
  [48, "Sanjog S.", "ProCohat"],
  [49, "Sanjog S.", "ProCohat"],
  [50, "Sanskruti K.", "iOrbit Digital Technologies"],
  [51, "Saumya G.", "Techquadra Software Solutions"],
  [52, "Sameer J.", "TechnoHacks EduTech"],
  [53, "Shital J.", "Atreya Innovations Pvt Ltd"],
  [54, "Shivani P.", "Unifins IT Hub Pvt Ltd"],
  [55, "Seema B.", "IT & HR Consulting Solutions Pvt. Ltd."],
  [56, "Subodh S.", "SportsKingdom"],
  [57, "Sayali J.", "VeBuIn Pvt. Ltd."],
  [58, "Rohit S.", "Lentra"],
  [59, "Sumit J.", "DhanInfo"],
  [60, "Surbhi B.", "Webtech Developers Pvt Ltd"],
  [61, "Sumit J.", "DhanInfo"],
  [62, "Sushant P.", "Bajaj Allianz General Insurance"],
  [63, "Tejas C.", "Zymr, Inc."],
  [64, "Supriya K.", "Automata"],
  [65, "Tejas P.", "Talentrise Technokrate Pvt Ltd"],
  [66, "Tejas P.", "NewTechFusion Cybertech Pvt Ltd"],
  [67, "Vanshika V.", "Vyloo Technologies Pvt. Ltd."],
  [68, "Vedant R.", "MarkTale"],
  [69, "Tirth T.", "CGS Tech Lab"],
  [70, "Prajakta P.", "TechnoHacks EduTech"],
];

export const PLACEMENTS: Placement[] = RAW.map(([id, name, company]) => ({
  id,
  name,
  company,
}));

/** Home page marquee me sirf yehi 12 posters dikhte hain. */
export const FEATURED_IDS = [1, 4, 10, 17, 21, 26, 33, 40, 46, 53, 62, 68];

export const GLOWS = [
  "201 255 59", // lime (brand)
  "255 176 64", // amber
  "64 190 255", // sky
  "170 120 255", // violet
  "255 107 129", // rose
  "52 222 170", // mint
] as const;

export const initials = (name: string) =>
  name
    .replace(/[.]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();