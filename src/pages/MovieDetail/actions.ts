import { useQuery, UseQueryResult } from "@tanstack/react-query";

import globalAxios from "api/common/globalAxios";

import { QueryKeys } from "common/query";
import { ErrorResponse } from "common/types";

import { MovieCastAndCrewResponse, MovieDetailReponse } from "./types";

export const useMovieDetailQuery = (
  movieId: number
): UseQueryResult<MovieDetailReponse, ErrorResponse> => {
  return useQuery({
    queryKey: [QueryKeys.movieDetail],
    queryFn: () =>
      globalAxios.get(`/movie/${movieId}`).then(({ data }) => data),
  });
};

export const useMovieCastAndCrewQuery = (
  movieId: number
): UseQueryResult<MovieCastAndCrewResponse, ErrorResponse> => {
  return useQuery({
    queryKey: [QueryKeys.castAndCrew],
    queryFn: () =>
      globalAxios.get(`/movie/${movieId}/credits`).then(({ data }) => data),
  });
};
