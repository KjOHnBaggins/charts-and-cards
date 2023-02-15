import { RESTDataSource } from "@apollo/datasource-rest";

class MoviesAPI extends RESTDataSource {
  baseURL = "https://api.worldbank.org/v2/country/";

  async getCountryInfo(countryCode) {
    return this.get(`${countryCode}`);
  }

  async getMovie(id) {
    return this.get(`movies/${encodeURIComponent(id)}`);
  }

  async getMostViewedMovies(limit = "10") {
    const data = await this.get("movies", {
      params: {
        per_page: limit,
        order_by: "most_viewed",
      },
    });
    return data.results;
  }
}

export default MoviesAPI;
