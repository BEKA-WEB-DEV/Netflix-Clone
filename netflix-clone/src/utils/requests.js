const API_KEY = 'process.env.REACT_APP_API_KEY';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchComedyTV: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchDocumentaryTV: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchTVLatest: `/tv/latest?api_key=${API_KEY}&language=en-US`,
    fetchTVPopular: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTVTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
}

export default requests