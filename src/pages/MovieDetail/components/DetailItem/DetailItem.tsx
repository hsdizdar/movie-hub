import { FC } from "react";

import { Container, Flex, Text } from "@mantine/core";

import classes from "./DetailItem.module.css";
import { DetailItemProps } from "./types";

const DetailItem: FC<DetailItemProps> = ({ title, description }) => (
  <Container fluid>
    <Flex direction="column">
      <Text size="md" fw={700} className={classes.text}>
        {title}
      </Text>
      <Text size="sm" className={classes.text}>
        {description}
      </Text>
    </Flex>
  </Container>
);

export default DetailItem;
