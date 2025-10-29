// Import your project images
import FURS from "./assets/FURS.png";
import Santayo from "./assets/Santayo.png";
import Aruga from "./assets/Aruga.png";
import EHEADS from "./assets/EHEADS.png";
import AS from "./assets/AS.png";
import PowerBI from "./assets/PowerBI.png";

const projectData = [
  {
    id: 1,
    name: "FURS",
    description:
      "On-going thesis project. F.U.R.S aims to be a centralized platform for stray animal management. It hopes to aid rescuers through community involvement by allowing them to view heatmaps and reports for a more efficient and data-driven approach to stray animal rescuing.",
    imageUrl: FURS,
    stack: ["React", "Firebase", "NodeJS"],
  },
  {
    id: 2,
    name: "Santayo",
    description:
      "Santayo started as a little idea that turned into a project. Santayo is a website that showcases local eateries or restaurants in the vicinity of CIIT. It displays how to get to the location from the school, their menus, and their specialties. It aims to help students decide where to eat during their break times, and help these local restaurants gather more business.",
    imageUrl: Santayo,
    stack: ["React", "Firebase", "NodeJS"],
  },
  {
    id: 3,
    name: "Aruga",
    description:
      "Aruga is a centralized medical app, aimed to be utilized by a specific hospital or clinic, which allows users to view their medical history, appointments, recent check-ups, and other details. Doctors and nurses are also connected within the system, in such a way that they can communicate with their patients, update their history, set appointments, and leave specific notes for their patients.",
    imageUrl: Aruga,
    stack: ["Kotlin"],
  },
  {
    id: 4,
    name: "Eraserheads Website",
    description:
      "A passion project, this website shows the rich history of OPM rock icon, Eraserheads. It goes into deep detail about each of the member’s past, as well as the intricate details of the different albums and hit songs they made as a band.",
    imageUrl: EHEADS,
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    name: "Student Health and Dental Records",
    description:
      "This project is in collaboration with Aquinas School. This system was developed in order to digitize the students’ health and dental records for a more streamlined and efficient approach to handling their medical records.",
    imageUrl: AS,
    stack: ["HTML", "PHP", "MySQL"],
  },
  {
    id: 6,
    name: "Amazing Mart Sales Analysis",
    description:
      "This dashboard, created in PowerBI, serves as an interactive and informative system for Amazing Mart’s sales. The user can view different information related to their sales, and filter it according to different categories for their analyzation and development of marketing strategies.",
    imageUrl: PowerBI,
    stack: ["PowerBI", "Excel", "Data Management"],
  },
];

export default projectData;
