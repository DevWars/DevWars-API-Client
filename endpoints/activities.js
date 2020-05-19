const Endpoint = require("./endpoint");

module.exports = class Activities extends Endpoint {
  /**
   * Creates a new instance of the activities class.
   * @param {AxiosInstance} client The axios client to be used to communicate with the api.
   * @param {string} path Any additional appended path (e.g /users)
   */
  constructor(client, path) {
    super(client, path);
  }

  /**
   * Get the current activities for the authenticated user.
   */
  async getActivities() {
    const options = this.buildOptions({
      path: `${this.path}/mine`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }
};
