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
   * @param {number} cursorDetails.first first The number of records to be returned.
   * @param {number} cursorDetails.after The number of records to skip.
   */
  async leaderboardsOfUsers(cursorDetails) {
    const urlQueryValues = [];

    ["first", "after"].forEach((value) => {
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
