const Endpoint = require("./endpoint");

module.exports = class Leaderboards extends Endpoint {
  /**
   * Creates a new instance of the leaderboards class.
   * @param {AxiosInstance} client The axios client to be used to communicate with the api.
   * @param {string} path Any additional appended path (e.g /users)
   */
  constructor(client, path) {
    super(client, path);
  }

  /**
   * Get the related leaderboards for the users.
   */
  async leaderboardsOfUsers() {
    const options = this.buildOptions({
      path: `${this.path}/users`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }
};
