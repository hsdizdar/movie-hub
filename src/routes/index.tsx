import { createFileRoute } from "@tanstack/react-router";

import { MovieList } from "pages/MovieList";

export const Route = createFileRoute("/")({
  component: MovieList,
});
