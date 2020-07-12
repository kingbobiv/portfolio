import React from "react";
import styled from "styled-components";
import { Flex, Box, Heading, Text } from "rebass/styled-components";
import { useTimer } from "react-timer-hook";

export default function WeddingTimer({ endTime }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp: endTime, onExpire: () => alert("Hitched!") });

  return (
    <Flex
      style={{ textAlign: "center" }}
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      bg="black"
      color="white"
      p={2}
    >
      <Box>
        <Box mb={5}>
          <Text variant="heading" fontSize={6}>
            Countdown to Gerry's speech!
          </Text>
          <Text variant="body" fontSize={4} mb={5}>
            {`(informally referred to as the wedding)`}
          </Text>
        </Box>
        <Text
          variant="display"
          fontSize="12vw"
          fontFamily="monospace"
          css={{ border: "1px solid white" }}
        >
          <span>{days}</span>:<span>{`${hours < 10 ? 0 : ""}${hours}`}</span>:
          <span>{`${minutes < 10 ? 0 : ""}${minutes}`}</span>:
          <span>{`${seconds < 10 ? 0 : ""}${seconds}`}</span>
        </Text>
      </Box>
    </Flex>
  );
}
