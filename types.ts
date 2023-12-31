export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SearchResults = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type Genres = {
  genres: Genre[];
};

export type GenreInfo = {
  id: number;
  name: string;
};
export type spokenLang = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type Companies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type Countries = {
  iso_3166_1: string;
  name: string;
};
export type MovieReview = {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string | null | any;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type IdType = { id: number | string | Number };

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: null | any;
  budget?: number;
  genres?: { id: number; name: string }[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: {
    id: number;
    logo_path?: string;
    name?: string;
    origin_country?: string;
  }[];
  production_countries?: { iso_3166_1: string; name: string }[];
  release_date?: string;
  revenue?: number;
  runtime: number;
  spoken_languages?: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average?: number;
  vote_count?: number;
};
