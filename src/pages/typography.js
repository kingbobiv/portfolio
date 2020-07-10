import styled from "styled-components";
import { Box, Heading, Text } from "rebass/styled-components";

export default function Typography() {
  return (
    <Box>
      <Heading>Vincent Pantano</Heading>
      <Text
        sx={{
          color: "black",
        }}
      >
        Developing Solutions for the Modern Web
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi
        provident saepe at numquam, magni placeat veniam sunt autem explicabo in
        architecto deleniti similique? Accusamus blanditiis odit molestiae
        aliquid suscipit?
      </Text>
    </Box>
  );
}
