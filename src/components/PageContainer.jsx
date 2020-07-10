import styled from "styled-components";
import { Box, Heading, Text } from "rebass/styled-components";

export default function PageContainer({ children }) {
  return (
    <Box
      maxWidth="pageMaxWidth"
      minHeight="100vh"
      bg="pageContainerBackground"
      mx="auto"
      p="card.p"
    >
      {children}
    </Box>
  );
}
