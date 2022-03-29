const API_KEY = "a005a3ccfcf951bef24afe9668f1b803";

const movieRequest = {
  fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default movieRequest;
