export type MovieCardProps = {
  imagePath: string;
  title: string;
  releaseDate: string;
  vote: number;
  overview: string;
  popularity: number;
  onClick: () => void;
};
