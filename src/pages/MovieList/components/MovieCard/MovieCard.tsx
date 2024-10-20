import { FC } from "react";

import { AspectRatio, Badge, Card, Flex, Image, Text } from "@mantine/core";

import { formatMovieReleaseDate } from "utils/date";
import { getFormattedPopularity, getRoundVote } from "utils/movie";
import { tmdbGenerateImageUrl } from "utils/url";

import classes from "./MovieCard.module.css";
import { MovieCardProps } from "./types";

const MovieCard: FC<MovieCardProps> = ({
  imagePath,
  title,
  releaseDate,
  vote,
  overview,
  onClick,
  popularity,
}) => {
  return (
    <Card
      className={classes.card}
      shadow="sm"
      padding="xs"
      radius="md"
      withBorder
      onClick={onClick}
    >
      <Card.Section>
        <AspectRatio ratio={2 / 3}>
          <Image src={tmdbGenerateImageUrl(imagePath)} alt="movieImage" />
        </AspectRatio>
      </Card.Section>

      <Card.Section p="sm" mih={200}>
        <Flex justify="space-between">
          <Flex direction="column">
            <Text size="xl" fw={700} lineClamp={1}>
              {title}
            </Text>
            <Text size="md">{formatMovieReleaseDate(releaseDate)}</Text>
          </Flex>

          <Flex justify="flex-end" align="center" ml="sm">
            <Badge size="xl" circle p={0}>
              {vote ? getRoundVote(vote) : "-"}
            </Badge>
          </Flex>
        </Flex>

        <Text size="sm" mt="md" c="dimmed" fw={500}>
          {`Popularity: ${getFormattedPopularity(popularity)}`}
        </Text>
        <Text size="sm" mt="md" lineClamp={3}>
          {overview}
        </Text>
      </Card.Section>
    </Card>
  );
};

export default MovieCard;
