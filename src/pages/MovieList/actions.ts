import {
  InfiniteData,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";

import globalAxios from "api/common/globalAxios";

import { QueryKeys } from "common/query";
import { ErrorResponse } from "common/types";

import { PopularMoviesResponse } from "./types";

const MOVIE_COUNT_PER_PAGE = 20;

export const usePopularMoviesQuery = (): UseInfiniteQueryResult<
  InfiniteData<PopularMoviesResponse>,
  ErrorResponse
> => {
  return useInfiniteQuery({
    queryKey: [QueryKeys.movieList],
    queryFn: ({ pageParam = 1 }) =>
      globalAxios
        .get(`/movie/popular?language=en-US&page=${pageParam}`)
        .then(({ data }) => data),
    initialPageParam: 1,
    getNextPageParam: (response) => {
      const { page, total_pages, total_results } = response;
      const totalCount = page * MOVIE_COUNT_PER_PAGE;
      return totalCount < total_results && page < total_pages
        ? page + 1
        : undefined;
    },
  });
};
