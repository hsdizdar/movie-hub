import { FC } from "react";

import { Container, Flex, Title, Text } from "@mantine/core";

import classes from "./Overview.module.css";
import { OverviewProps } from "./types";

const Overview: FC<OverviewProps> = ({ tagline, overview }) => (
  <Container fluid mt="xl" mb="xl">
    <Title size="sm" fs="italic" c="dimmed">
      {tagline}
    </Title>

    <Flex direction="column">
      <Text className={classes.text} size="xl" fw={700}>
        Overview
      </Text>
      <Text className={classes.text} size="sm">
        {overview}
      </Text>
    </Flex>
  </Container>
);

export default Overview;
