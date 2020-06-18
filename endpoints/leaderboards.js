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
   * Gets all the users with paging.
   * @param {object} cursorDetails The paging details object containing the
   * optional after, before and first.
   */
  async leaderboardsOfUsers(cursorDetails) {
    const urlQueryValues = [];

    ["after", "before", "first"].forEach((value) => {
      if (cursorDetails[value] != null)
        urlQueryValues.push(`${value}=${cursorDetails[value]}`);
    });

    const options = this.buildOptions({
      path: `${this.path}/users?${urlQueryValues.join("&")}`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }
};
