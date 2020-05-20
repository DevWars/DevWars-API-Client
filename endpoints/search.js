const Endpoint = require("./endpoint");

module.exports = class Search extends Endpoint {
  /**
   * Creates a new instance of the search class.
   * @param {AxiosInstance} client The axios client to be used to communicate with the api.
   * @param {string} path Any additional appended path (e.g /users)
   */
  constructor(client, path) {
    super(client, path);
  }

  /**
   *
   * Makes a search for users with the given details.
   * @param {number} details.limit The total upper number of records to return.
   * @param {boolean} details.full If full details of users should be returned or just basic details.
   * @param {string} details.username The username to search for.
   * @param {string} details.email The email to search for.
   */
  async searchForUsers(details) {
    const queryProperties = [];

    ["limit", "full", "username", "email"].forEach((value) => {
      if (details[value] != null) queryProperties.push(details[value]);
    });

    const options = this.buildOptions({
      path: `${this.path}/users?${queryProperties.join("&")}`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   *
   * Makes a search for games with the given details.
   * @param {number} details.limit The total upper number of records to return.
   * @param {boolean} details.full If full details of users should be returned or just basic details.
   * @param {string} details.title The title to search for.
   */
  async searchForGames(details) {
    const queryProperties = [];

    ["limit", "full", "title"].forEach((value) => {
      if (details[value] != null) queryProperties.push(details[value]);
    });

    const options = this.buildOptions({
      path: `${this.path}/games?${queryProperties.join("&")}`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }
};
