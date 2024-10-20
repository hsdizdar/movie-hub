import { FC } from "react";

import { Container, Flex, Title, Text, Button } from "@mantine/core";

import { formatDateWithUS, getYearFromDate } from "utils/date";

import classes from "./Header.module.css";
import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({
  title,
  releaseDate,
  genres,
  homepageLink,
}) => (
  <Container fluid>
    <Flex
      direction="row"
      justify="space-between"
      align="center"
      wrap="wrap"
      gap="lg"
    >
      <Flex direction="column">
        <Title size="xl" className={classes.text}>
          {`${title} (${getYearFromDate(releaseDate)})`}
        </Title>

        <Flex direction="row" wrap="wrap">
          <Text className={classes.text} size="sm">
            {formatDateWithUS(releaseDate)}
          </Text>
          <Text span className={classes.dash} size="sm">
            -
          </Text>
          <Text span size="sm" className={classes.text}>
            {genres?.map((genre) => genre.name)?.join(", ")}
          </Text>
        </Flex>
      </Flex>
      {homepageLink && (
        <Button component="a" href={homepageLink} target="_blank">
          Visit Home Page
        </Button>
      )}
    </Flex>
  </Container>
);

export default Header;
