export default async function singleMovieDetail(id: string) {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  };

  const data = await fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      const returnMovieData = {
        backdrop: json.backdrop_path,
        name: json.original_title,
        runtime: json.runtime,
        releaseDate: json.release_date,
        budget: json.budget,
        prod_comp: json.production_companies,
        languages: json.spoken_languages,
        overview: json.overview,
        vote: json.vote_average,
        count: json.vote_count,
      };
      return returnMovieData;
    })
    .catch((err) => console.error("error:" + err));

  return data;
}
