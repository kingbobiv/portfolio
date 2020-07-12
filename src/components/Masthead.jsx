import styled from "styled-components";
import Markdown from "markdown-to-jsx";

import { Box, Heading, Text } from "rebass/styled-components";

const hello = `This is a scratch space for experimentation in a modern stack. This page is deployed by Heroku, served by Next.js, built in React, and styled with a mix of styled-components, rebass, and a theme-spec-approved™ theming context.`;

export default function Masthead() {
  return (
    <>
      <Box maxWidth="pageWrapper.lg" my="5" mx={"auto"} px={4}>
        <Box variant="card" textAlign="center">
          <Heading variant="display" fontSize={[5, 6, 7]}>
            👋 Vincent Pantano
          </Heading>
          <Text as="div" variant="heading" fontSize={[2, 3]}>
            Developing Solutions for the Modern Web
          </Text>
        </Box>
      </Box>
      <Box maxWidth="pageWrapper.sm" my="5" mx={"auto"} px={4}>
        <Box variant="card">
          <Text variant="body">{hello}</Text>
        </Box>
      </Box>
    </>
  );
}
