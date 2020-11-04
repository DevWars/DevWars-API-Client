const Endpoint = require("./endpoint");

module.exports = class Badges extends Endpoint {
  /**
   * Creates a new instance of the badges class.
   * @param {AxiosInstance} client The axios client to be used to communicate with the api.
   * @param {string} path Any additional appended path (e.g /users)
   */
  constructor(client, path) {
    super(client, path);
  }

  /**
   * Get all the current badges within devwars.
   */
  async currentBadges() {
    const options = this.buildOptions({
      path: `${this.path}`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }
};

