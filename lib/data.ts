import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import aireuropa from "@/public/aireuropa.jpg";
import juniper from "@/public/juniper.jpg";
import chiliz from "@/public/chiliz.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "QA ENGINEER  -CHILIZ",
    location: "Malta",
    company: "CHILIZ",
    description:
      "Developed comprehensive test cases and collaborated with teams to ensure full coverage of requirements.  Automated testing using Katalon Studio, Selenium,and Cucumber, speeding up bug detection and improving efficient by 30%",
    icon: React.createElement(CgWorkAlt),
    // icon: <CgWorkAlt />,
    date: "Aug 2023 - Feb 2024",
  },
  {
    title: "QA TESTER",
    location: "Palma de Mallorca, Spain",
    company: "JUNIPER CONSULTING",
    description:
      "Designed and executed functional tests for new developments. Proposing improvements for initialy unplanned projects, Efficient management of Oracle and Postgres databases, Developed an automation framework for web and mobile applications using Selenium and Appium.",
    //icon: <FaReact />,
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 - Aug -2023",
  },
  {
    title: "QA TESTER",
    location: "Palma de Mallorca, Spain",
    company: "AIR EUROPA",
    description:
      "Developed test cases and automated API tests using Postman and Newman Collaborated in continuous integration management with Jenkins Managed a Mobile Device Management (MDM) system",
    //icon: <FaReact />,
    icon: React.createElement(CgWorkAlt),
    date: "July 2019 - Aug -2022",
  },

  {
    title: "WEB DEVELOPER & DESIGN - INKOR",
    location: "San Sebastian , Spain",
    company: "",
    description: "",
    icon: React.createElement(LuGraduationCap),
    //icon: <LuGraduationCap />,
    date: "2020 -2021 ",
  },
  {
    title:
      "Diploma in Electronics and Telecommunications Engineering Technology ",
    company: "",
    location: "Facatativa, Colombia",
    description: "",
    icon: React.createElement(LuGraduationCap),
    //icon: <LuGraduationCap />,
    date: "2011 -2014",
  },
] as const;

export const projectsData = [
  {
    title: "Air Europa Crewpad",
    description:
      "I worked as a QA Engineer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Selenium", "Java", "Postgree", "Cucumber", "Testlink"],
    imageUrl: aireuropa,
  },
  {
    title: "Juniper Consulting",
    description:
      "Job board for remote developer jobs. I was the QA Enginner. It has features like filtering, sorting and pagination.",
    tags: ["XML", "C#", "SQL", "HTML", "Javascript"],
    imageUrl: juniper,
  },
  {
    title: "Chiliz",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "XCode", "Jira", "Katalon", "Java"],
    imageUrl: chiliz,
  },
]; ;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "JAVA",
  "Selenium WebDriver",
  "Cucumber",
  "XCode",
  "JSON",
  "Gherkin",
  "XML",
  "PostgreSQL",
  "C#",
  "Jira",
  "Katalon",
  "Appium",
] as const;
