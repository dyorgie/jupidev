// Import your project images
import FURS from "./assets/FURS.png";
import CreditRiskAnalysis from "./assets/CreditRiskAnalysis.png";

const projectData = [
  {
    id: 1,
    name: "FURS",
    description:
      "On-going thesis project. F.U.R.S aims to be a centralized platform for stray animal management. It hopes to aid rescuers through community involvement by allowing them to view heatmaps and reports for a more efficient and data-driven approach to stray animal rescuing.",
    imageUrl: FURS,
    stack: ["React", "Firebase", "NodeJS"],
    githubUrl: "https://github.com/teruterubozuuu/furs-project",
  },
  {
    id: 2,
    name: "Credit Risk Analysis Dashboard",
    description:
      "Built an end-to-end data pipeline to analyze historical payment behaviors and predict credit card default risk. This project identifies high-risk customer segments to help financial institutions mitigate potential revenue loss.",
    imageUrl: CreditRiskAnalysis,
    stack: ["Python", "MySQL", "Power BI"],
    githubUrl: "https://github.com/dyorgie/credit-risk-analytics",
  },
];

export default projectData;
