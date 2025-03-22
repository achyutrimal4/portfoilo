import * as faIcons from "react-icons/fa6";
import { DiPostgresql } from "react-icons/di";
import { RiFileExcel2Line } from "react-icons/ri";
import { SiTableau } from "react-icons/si";

const projects = [
  {
    id: "1",
    name: "Git CheatSheet",
    description: "Git CheatSheet for Git fundamentals",
    image: "/images/git.png",
    url: "https://glacier-coyote-dbb.notion.site/GIT-Cheat-Sheet-Basics-1bb3588ef86f8018ac9ffd8750c867cd",
    category: "Cheatsheet",
    icon: <faIcons.FaSheetPlastic />,
    type: "CheatSheet",
    date: "March 19, 2025",
  },
  {
    id: "2",
    name: "SQL CheatSheet",
    description: "Basic Cheetsheet for SQL",
    image: "images/postgres.png",
    url: "https://glacier-coyote-dbb.notion.site/SQL-CHEAT-SHEET-1bb3588ef86f80109fd6ddb9d76c6dfc",
    category: "Cheatsheet",
    icon: <faIcons.FaSheetPlastic />,
    type: "CheatSheet",
    date: "March 19, 2025",
  },
  {
    id: "3",
    name: "Movie Rental Data Analysis",
    description: "Advanced SQL code for analysing a movie rental business.",
    image: "images/movieRental.jpg",
    url: "  https://glacier-coyote-dbb.notion.site/SQL-1bc3588ef86f80b2be0ed7d5f914ec5d?pvs=4",
    category: "SQL",
    icon: <DiPostgresql />,
    type: "Data Analysis",
    date: "March 19, 2025",
  },
];
export default projects;
