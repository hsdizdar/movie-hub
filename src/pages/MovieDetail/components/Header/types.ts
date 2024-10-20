import { Genre } from "../../types";

export type HeaderProps = {
  title?: string;
  releaseDate?: string;
  genres?: Array<Genre>;
  homepageLink?: string;
};
