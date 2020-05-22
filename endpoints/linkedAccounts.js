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
   * Get the related users coins via a provider, like twitch. This is all the
   * users coins and not just the coins they gained from twitch/discord (unless
   * the account is not linked)
   * @param {string} provider The name of the provider, e.g twitch.
   * @param {string} providerId The account id of the users provider account.
   */
  async getCoinsByProviderAndId(provider, providerId) {
    const options = this.buildOptions({
      path: `${this.path}/${provider}/${providerId}/coins`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * update the related users coins via a provider, like twitch. This is all the
   * users coins and not just the coins they gained from twitch/discord (unless
   * the account is not linked)
   * @param {string} provider The name of the provider, e.g twitch.
   * @param {string} providerId The account id of the users provider account.
   * @param {string} providerUsername The username of the provider account, used
   * to create the missing account if the user does not exist.
   * @param {number} delta The shift in the amount of coins being added or
   * removed.
   */
  async updateCoinsByProviderAndId(
    provider,
    providerId,
    providerUsername,
    delta
  ) {
    const options = this.buildOptions({
      path: `${this.path}/${provider}/${providerId}/coins`,
      method: "patch",
      body: {
        username: providerUsername,
        amount: delta,
      },
    });

    return this.apiCall(options);
  }
};
