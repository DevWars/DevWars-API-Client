const Endpoint = require("./endpoint");

module.exports = class LinkedAccounts extends Endpoint {
  /**
   * Creates a new instance of the linkedAccounts class.
   * @param {AxiosInstance} client The axios client to be used to communicate with the api.
   * @param {string} path Any additional appended path (e.g /users)
   */
  constructor(client, path) {
    super(client, path);
  }

  /**
   * Gets all the linked accounts with paging.
   * @param {object} cursorDetails The paging details object containing the
   * optional after, before and first.
   */
  async linkedAccountsWithPaging(cursorDetails) {
    const urlQueryValues = [];

    ["after", "before", "first"].forEach((value) => {
      if (cursorDetails[value] != null)
        urlQueryValues.push(`${value}=${cursorDetails[value]}`);
    });

    const options = this.buildOptions({
      path: `${this.path}?${urlQueryValues.join("&")}`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Disconnects a given provider for the current authenticated user.
   * @param {string} provider The provider being disconnected e.g twitch.
   */
  async disconnectLinkedAccount(provider) {
    const options = this.buildOptions({
      path: `${this.path}/${provider}`,
      method: "delete",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Update the given users with the provided amount of coins.
   * @param {object} updates object of keys containing the a object of the
   * twitchUser (id and or username) and the amount.
   */
  async updateTwitchCoinsForUser(updates) {
    const options = this.buildOptions({
      path: `${this.path}/twitch/coins`,
      method: "put",
      body: {
        updates,
      },
    });

    return this.apiCall(options);
  }
};
