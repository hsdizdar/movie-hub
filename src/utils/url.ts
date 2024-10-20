import { TMDB_IMAGE_BASE_URL } from "common/constants";

export const tmdbGenerateImageUrl = (url?: string) => {
  if (!url) return "";
  return TMDB_IMAGE_BASE_URL + url;
};
