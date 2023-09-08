import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Adedoyinsola!";
const bio1 = "A fullstack developer";
const bio2 = "specialised in React and Django";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar size="xl" name="ade" src="ade.jpg" />
      <Heading size="lg" color="white">
        {greeting}
      </Heading>
      <Heading size="md" color="white">
        {bio1}
      </Heading>
      <Heading size="md" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
