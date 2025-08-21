export interface Project {
  id: number;
  year: string;
  category: string;
  title: string;
  projectOverview: string;
  image: string;
  location: string;
  desc : string[];
  projectGoal: string;
  mainCategory: string | string[];  
  subCategory: string | string[];
}

export const projects: Project[] = [
{
      id: 1,
      year: "2024",
      category: "Drone Services , Agriculture & Plantations",
      title: "Certified Pilot Services for Mapping & Point Capture in Palm Plantation",
      projectOverview: "Certified drone pilots expertly navigate UAVs to map 15 hectares of palm oil plantation in Medan, capturing high-precision data for sustainable management.",
      image: "/project/1.png",
      location: "Medan, Indonesia",
      desc : [" Output : Pilot Services",
        " Sector : Palm and Oil Plantation",
        " Device : Multicopter Drone",
      ],
      projectGoal : "Ensure safe and smooth operations, adhere to technical standards for mapping, and capture optimal data.",
      mainCategory: ["industri", "product"],
      subCategory: ["Drone Services", "Agriculture & Plantations"],
    },

    {
      id: 2,
      year: "2019",
      category: "forestry, drone services",
      title: "Wood Volume Assessment & Tree Counting",
      projectOverview: "This analysis seeks to ascertain and forecast the quantity of trees available for harvest. it ccelerates the manual calculation process from six months to marely one month.",
      image: "/project/9.png",
      location: "Philipines",
      desc: [
        "Output: Wood Volume Assessment & Computation",
        "Sector: Forestry (Clove)",
        "Device: Unmanned Aerial Vehicle (UAV)",
        "Accuracy: 83%",
      ],
      projectGoal : "Ensure safe and smooth operations, adhere to technical standards for mapping, and capture optimal data.",
      mainCategory: ["industri", "product"],
      subCategory: ["Forestry" , "Drone Services"],
    },
    //     {
    //       id: 3,
    //   year: "2023",
    //   category: "Advance Manufacturing",
    //   title: "Wood Volume Assessment  & Tree Counting",
    //   projectOverview: "Enhancing air quality management capabilities in port and water areas through the BVD-M16A drone, which is equipped with a sniffing sensor capable of swiftly detecting carbon and air pollutants.",
    //   image: "/project/3.png",
    //   location: "Surabaya, Indonesia",
    //   desc: [
    //     "Product : BVD-M16A",
    //     "Camera: RGB and Snipping Sensor",
    //   ],
    //   mainCategory: ["product"],
    //   projectGoal : "Enhancing the efficiency of air quality monitoring and oversight processes in aquatic environments.",
    //   subCategory: ["Advance Manufacturing"],
    // },
    {
      id: 4,
      year: "2023",
      category: "Advance Manufacturing, Forestry",
      title: "Surveillance Drone for Forest Monitoring",
      projectOverview: "Enhancing disaster management capabilities in North Kalimantan through the deployment of BVD-V25 surveillance drones, which are equipped with thermal and RGB cameras capable of swiftly identifying hotspots in forested regions and locating missing individuals.",
      image: "/project/4.png",
      location: "Malinau, North Kalimantan, Indonesia",
      desc: [
        "Product : BVD-V25",
        "Camera: Thermal and RGB",
      ],
      mainCategory: ["product" , "industri"],
      projectGoal : "Enhancing the efficacy of forest monitoring and missing persons search operations.",
      subCategory: ["Advance Manufacturing", "Forestry"],
    },
    {
      id: 5,
      year: "2023",
      category: "Training, Forestry",
      title: "Drone Operation Training",
      projectOverview: "Training on the utilization of BVD-V25 drones for surveillance and rescue operations in forested regions for safety operational teams.",
      image: "/project/8.png",
      location: "Malinau, North Kalimantan, Indonesia",
      desc: [
        "Participants : 15 Individuals",
        "Sector: Security and Forestry",
        "Topic : Utilization of Drones for Surveillance in Forestry",
      ],
      mainCategory: ["product" , "industri"],
      projectGoal : "Enhancing the capability and capacity of human resources to increase the efficiency of disaster management in North Kalimantan through surveillance utilizing BVD-V25 drones.",
      subCategory: ["Training", "Forestry"],
    },
    {
      id: 6,
      year: "2024",
      category: "R&D Services, Agriculture & Plantations",
      title: "Polination Drones",
      projectOverview: "An innovative R&D initiative to develop AI-powered autonomous drones designed specifically for optimizing pollination in palm plantations, enhancing efficiency, yield, and sustainability.",
      image: "/project/7.png",
      location: "Sulawesi, Indonesia",
      desc: [
        "output: Poination Drones",
      ],
      mainCategory: ["product" , "industri"],
      projectGoal : "Optimize operational costs and accelerate the pollination process in palm plantations for maximum efficiency and productivity.",
      subCategory: ["R&D Services", "Agriculture & Plantations"],
    },
    {
      id: 7,
      year: "2025",
      category: "Advance Manufacturing",
      title: "Manufacture of BVD-M14 Mapping Drone",
      projectOverview: "This project focuses on manufacturing the BVD-M14, a quadcopter mapping drone equipped with a high-resolution RGB camera, designed to deliver reliable aerial surveys and precise geospatial data collection.",
      image: "/project/5.jpg",
      location: "Yogyakarta, Indonesia",
      desc: [
        "Product: BVD-M14",
      ],
      mainCategory: ["product"],
      projectGoal : "To provide a reliable, accurate, and efficient mapping solution across sectors through drone BVD-M14.",
      subCategory: ["Advance Manufacturing"],
    },
    {
      id: 8,
      year: "2025",
      category: "Training",
      title: "Drone Mapping Operational Training",
      projectOverview: "This project provides training on operating mapping drones, including VTOL and multicopter types, combining theoretical knowledge with practical skills in flight, mission planning, data collection, and safety.",
      image: "/project/6.jpg",
      location: "Yogyakarta, Indonesia",
      desc: [
        "Product: Drone Mapping Operational Training",
      ],
      mainCategory: ["product"],
      projectGoal : "To develop skilled operators who can perform accurate mapping, ensure safe drone operations, and support various applications.",
      subCategory: ["Training"],
    },
  ];