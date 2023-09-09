import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Front-End",
    description: 
      "A responsive on all platform LittleLemon Website (Capstone)",
    getImageSrc: () => require("../images/Mario and Adrian b.jpg"),
  },
  {
    title: "Django Web Framework",
    description:
      "LittleLemon Website Back-End 🔥️ (Capstone)",
    getImageSrc: () => require("../images/restauranfood.jpg"),
  },
  {
    title: "Advanced HTML and CSS",
    description:
      "A Responsive on all platform Lucky Shrub Homepage",
    getImageSrc: () => require("../images/restaurant.jpg"),
  },
  {
    title: "Fullstack",
    description:
      "A LittleLemon Website connected to MySql database",
    getImageSrc: () => require("../images/restaurant chef B.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url="https://github.com/surfiniaburger"
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
