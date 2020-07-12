import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { Box, Heading, Text } from "rebass/styled-components";
const WeddingTimer = dynamic(() => import("./WeddingTimer"), {
  ssr: false,
});

export default function Countdown() {
  const weddingTime = new Date("2021-08-28T18:30:00.000-04:00");
  const [showTimer, setShowTimer] = useState(false);
  useEffect(() => {
    setShowTimer(true);
  }, []);
  return <div>{showTimer && <WeddingTimer endTime={weddingTime} />}</div>;
}
