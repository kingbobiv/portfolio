import styled from "styled-components";
import { Box, Heading, Text } from "rebass/styled-components";

export default function Masthead() {
  return (
    <Box pt={5} textAlign="center">
      <Heading>Vincent Pantano</Heading>
      <Text variant="subheading">Developing Solutions for the Modern Web</Text>
    </Box>
  );
}
