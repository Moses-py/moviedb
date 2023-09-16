type MovieData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type SingleMovieDetail = {
  backdrop: string;
  name: string;
  runtime: number;
  releaseDate: string;
  budget: number;
  prod_comp: ProdCompanies[];
  languages: LangSpoken[];
  overview: string;
  vote: number;
  count: number;
};

type ProdCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type LangSpoken = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
