import { FC } from "react";

import {
  BackgroundImage,
  Container,
  Image,
  AspectRatio,
  Grid,
  Flex,
  Button,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useParams, useRouter } from "@tanstack/react-router";

import { ErrorSuccessModal } from "components/ErrorSuccessModal";
import { Loading } from "components/Loading";

import { formatAmount } from "utils/amount";
import { getFormattedPopularity, getRoundVote } from "utils/movie";
import { tmdbGenerateImageUrl } from "utils/url";

import { useMovieCastAndCrewQuery, useMovieDetailQuery } from "./actions";
import { DetailItem } from "./components/DetailItem";
import { Header } from "./components/Header";
import { Overview } from "./components/Overview";
import classes from "./MovieDetail.module.css";

const MovieDetail: FC = () => {
  const { history } = useRouter();
  const { id } = useParams({ from: "/$id" });

  const [
    isMovieDetailError,
    { close: movieDetailErrorModalClose, open: movieDetailErrorModalOpen },
  ] = useDisclosure(false);
  const [
    isCastAndCrewError,
    { close: castAndCrewErrorModalClose, open: castAndCrewErrorModalOpen },
  ] = useDisclosure(false);

  const {
    data: movie,
    isLoading: isLoadingMovieDetail,
    isError: isErrorMovieDetail,
    error: movieDetailError,
  } = useMovieDetailQuery(Number(id));
  const {
    data: castAndCrew,
    isLoading: isLoadingCastAndCrew,
    isError: isErrorCastAndCrew,
    error: castAndCrewError,
  } = useMovieCastAndCrewQuery(Number(id));

  const movieDetails: { title: string; description: string }[] = [
    { title: "Status", description: movie?.status || "" },
    {
      title: "Revenue",
      description: movie?.revenue ? `${formatAmount(movie.revenue)}` : "-",
    },
    {
      title: "Budget",
      description: movie?.budget ? `${formatAmount(movie.budget)}` : "-",
    },
    {
      title: "Rating",
      description: movie?.vote_average
        ? `${getRoundVote(movie.vote_average)}`
        : "-",
    },
    {
      title: "Popularity",
      description: movie?.popularity
        ? `${getFormattedPopularity(movie?.popularity)}`
        : "-",
    },
  ];

  const topThreeCast = castAndCrew?.cast
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 3);

  const directors = castAndCrew?.crew.filter(
    (member) => member.job === "Director"
  );

  if (isErrorMovieDetail) movieDetailErrorModalOpen();
  if (isErrorCastAndCrew) castAndCrewErrorModalOpen();

  if (isLoadingMovieDetail || isLoadingCastAndCrew) {
    return <Loading />;
  }

  return (
    <Container fluid p={0} className={classes.container}>
      <BackgroundImage
        src={tmdbGenerateImageUrl(movie?.backdrop_path)}
        className={classes.background}
      >
        <Container fluid className={classes.overlay} />
        <Flex className={classes.wrapper} mb="md">
          <Button onClick={() => history.back()}>Back</Button>
        </Flex>
        <Grid className={classes.wrapper}>
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <AspectRatio ratio={2 / 3}>
              {movie?.poster_path && (
                <Image
                  src={tmdbGenerateImageUrl(movie.poster_path)}
                  alt="movieImage"
                />
              )}
            </AspectRatio>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 8 }}>
            <Header
              title={movie?.title}
              releaseDate={movie?.release_date}
              genres={movie?.genres}
              homepageLink={movie?.homepage}
            />
            <Overview tagline={movie?.tagline} overview={movie?.overview} />
            <Grid>
              {movieDetails.map(({ title, description }) => {
                return (
                  <Grid.Col key={title} span={{ base: 6, md: 4 }}>
                    <DetailItem title={title} description={description} />
                  </Grid.Col>
                );
              })}
            </Grid>
            <Container fluid mt="xl" mb="sm">
              <Text size="xl" fw={700} className={classes.title}>
                Cast and Crew
              </Text>
            </Container>
            <Grid>
              {directors?.map((director) => {
                return (
                  <Grid.Col key={director.id} span={{ base: 6, md: 4 }}>
                    <DetailItem
                      title={director.original_name}
                      description={director.job}
                    />
                  </Grid.Col>
                );
              })}
              {topThreeCast?.map((cast) => {
                return (
                  <Grid.Col key={cast.id} span={{ base: 6, md: 4 }}>
                    <DetailItem
                      title={cast.original_name}
                      description={`${cast.known_for_department} - ${cast.character}`}
                    />
                  </Grid.Col>
                );
              })}
            </Grid>
          </Grid.Col>
        </Grid>
      </BackgroundImage>
      <ErrorSuccessModal
        visible={isMovieDetailError}
        closeModal={movieDetailErrorModalClose}
        type="error"
        message={movieDetailError?.status_message ?? ""}
      />
      <ErrorSuccessModal
        visible={isCastAndCrewError}
        closeModal={castAndCrewErrorModalClose}
        type="error"
        message={castAndCrewError?.status_message ?? ""}
      />
    </Container>
  );
};

export default MovieDetail;
