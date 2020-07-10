import styled from "styled-components";
import { Box, Heading, Text } from "rebass/styled-components";

export default function Masthead() {
  return (
    <Box
      variant="card"
      maxWidth="pageWrapper"
      my={5}
      mx="auto"
      textAlign="center"
    >
      <Heading variant="display">Vincent Pantano</Heading>
      <Text variant="heading">Developing Solutions for the Modern Web</Text>
    </Box>
  );
}
