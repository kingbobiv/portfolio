import styled from "styled-components";
import { Box, Heading, Text } from "rebass/styled-components";

export default function TypographyTest() {
  return (
    <Box variant="card" maxWidth="800px" mx="auto" p={2}>
      <Text fontFamily="body" fontSize={3}>
        Now we're testing typography
      </Text>
    </Box>
  );
}
