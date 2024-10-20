import { createFileRoute } from "@tanstack/react-router";

import { MovieDetail } from "pages/MovieDetail";

export const Route = createFileRoute("/$id")({
  component: MovieDetail,
});
