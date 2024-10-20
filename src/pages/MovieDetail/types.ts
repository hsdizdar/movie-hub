export interface Genre {
  id: number;
  name: string;
}

export interface Company {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Country {
  iso_3166_1: string;
  name: string;
}

export interface Language {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieDetailReponse {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: Array<Genre>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<Company>;
  production_countries: Array<Country>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<Language>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface MovieCastAndCrewResponse {
  id: number;
  cast: Array<Cast>;
  crew: Array<Crew>;
}
