import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      bg="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      alignItems="flex-start"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" boxSize="200px" />
      <VStack alignItems="flex-start" spacing={2}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
      </VStack>
      <HStack mt={4} alignSelf="flex-end">
        <Text fontWeight="bold" color="blue.500">
          Learn More
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;


