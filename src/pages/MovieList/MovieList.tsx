import { FC } from "react";

import { Button, Container, Grid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "@tanstack/react-router";

import { ErrorSuccessModal } from "components/ErrorSuccessModal";

import { usePopularMoviesQuery } from "./actions";
import { MovieCard } from "./components/MovieCard";

const MovieList: FC = () => {
  const navigate = useNavigate();

  const [opened, { close, open }] = useDisclosure(false);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
  } = usePopularMoviesQuery();

  const movies = data?.pages.flatMap((page) => page.results) || [];

  if (isError) open();

  return (
    <Container fluid p="sm">
      <Grid>
        {movies.map((movie) => (
          <Grid.Col key={movie.id} span={{ xs: 6, sm: 4, lg: 3 }}>
            <MovieCard
              imagePath={movie.poster_path}
              title={movie.title}
              releaseDate={movie.release_date}
              vote={movie.vote_average}
              overview={movie.overview}
              popularity={movie.popularity}
              onClick={() =>
                navigate({ to: "/$id", params: { id: `${movie.id}` } })
              }
            />
          </Grid.Col>
        ))}
      </Grid>
      {hasNextPage && (
        <Container mt="md">
          <Button
            fullWidth
            justify="center"
            size="md"
            loading={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            Load More
          </Button>
        </Container>
      )}
      <ErrorSuccessModal
        visible={opened}
        closeModal={close}
        type="error"
        message={error?.status_message ?? ""}
      />
    </Container>
  );
};

export default MovieList;
