export async function getMovieList(id: number) {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${id}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  };

  const data: MovieData[] = await fetch(url, options)
    .then((res) => res.json())
    .then((json) => json.results)
    .catch((err) => console.error("error:" + err));

  return data;
}
