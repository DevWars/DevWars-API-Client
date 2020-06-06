const Endpoint = require("./endpoint");

module.exports = class Games extends Endpoint {
  /**
   * Creates a new instance of the games class.
   * @param {AxiosInstance} client The axios client to be used to communicate with the api.
   * @param {string} path Any additional appended path (e.g /users)
   */
  constructor(client, path) {
    super(client, path);
  }

  /**
   * Gets all the games with paging.
   * @param {object} cursorDetails The paging details object containing the
   * optional after, before and first.
   */
  async gamesWithPaging(cursorDetails) {
    const urlQueryValues = [];

    ["after", "before", "first", "status", "season"].forEach((value) => {
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
   * Create new game with the give details.
   * @param {details} details The details of the game.
   */
  async createGame(details) {
    const updatingBody = {};

    [
      "startTime",
      "season",
      "mode",
      "title",
      "videoUrl",
      "status",
      "templates",
    ].forEach((value) => {
      if (details[value] != null) updatingBody[value] = details[value];
    });

    const options = this.buildOptions({
      path: `${this.path}/`,
      method: "post",
      body: updatingBody,
    });

    return this.apiCall(options);
  }

  /**
   * Updates the give game by the provided id with the details..
   * @param {number} gameId The id of the game being updated.
   * @param {details} details The details of the game.
   */
  async updateGame(gameId, details) {
    const updatingBody = {};

    [
      "startTime",
      "season",
      "mode",
      "title",
      "videoUrl",
      "status",
      "storage",
    ].forEach((value) => {
      if (details[value] != null) updatingBody[value] = details[value];
    });

    const options = this.buildOptions({
      path: `${this.path}/${gameId}`,
      method: "patch",
      body: updatingBody,
    });

    return this.apiCall(options);
  }

  /**
   * Get the given game by the provided id.
   * @param {number} gameId The id of the game.
   */
  async getGame(gameId) {
    const options = this.buildOptions({
      path: `${this.path}/${gameId}`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Delete the given game by the provided id.
   * @param {number} gameId The id of the game.
   */
  async deleteGame(gameId) {
    const options = this.buildOptions({
      path: `${this.path}/${gameId}`,
      method: "delete",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Trigger the auto assign of players to roles for the given game.
   * @param {number} gameId The id of the game.
   */
  async triggerAutoAssignForGame(gameId) {
    const options = this.buildOptions({
      path: `${this.path}/${gameId}/auto-assign`,
      method: "post",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Activate the given game by id.
   * @param {number} gameId The id of the game.
   */
  async activateGame(gameId) {
    const options = this.buildOptions({
      path: `${this.path}/${gameId}/actions/activate`,
      method: "post",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * End the given game by id.
   * @param {number} gameId The id of the game.
   */
  async endGame(gameId) {
    const options = this.buildOptions({
      path: `${this.path}/${gameId}/actions/end`,
      method: "post",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * End the given game by id.
   * @param {number} gameId The id of the game.
   */
  async endGameBot(gameId) {
    const options = this.buildOptions({
      path: `${this.path}/${gameId}/end/bot`,
      method: "post",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Get all assigned players to a game.
   * @param {number} gameId The id of the game.
   */
  async getAllAssignedPlayersToGame(gameId) {
    const options = this.buildOptions({
      path: `${this.path}/${gameId}/players`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Add the player to the given game.
   * @param {number} gameId The id of the game.
   * @param {object} player The player being added.
   */
  async addPlayerToGame(gameId, player) {
    const playerBody = {};

    ["id", "language", "team"].forEach((value) => {
      if (player[value] != null) playerBody[value] = details[value];
    });

    const options = this.buildOptions({
      path: `${this.path}/${gameId}/players`,
      method: "post",
      body: { player: playerBody },
    });

    return this.apiCall(options);
  }

  /**
   * Removes the given player from the given game.
   * @param {number} gameId The id of the game.
   * @param {number} playerId The player id being removed.
   */
  async removePlayerFromGame(gameId, playerId) {
    const options = this.buildOptions({
      path: `${this.path}/${gameId}/players`,
      method: "delete",
      body: { player: { id: playerId } },
    });

    return this.apiCall(options);
  }
  /**
   * Get all the applications for the given game.
   * @param {number} gameId The id of the game.
   */

  async getGameApplications(gameId) {
    const options = this.buildOptions({
      path: `${this.path}/${gameId}/applications`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Applies the given user to the given game.
   * @param {number} gameId The id of the game.
   * @param {number} userId The id of the user applying.
   */
  async applyToGameAsPlayer(gameId, userId) {
    const options = this.buildOptions({
      path: `${this.path}/${gameId}/applications/${userId}`,
      method: "post",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Gets the players application for the given game.
   * @param {number} gameId The id of the game.
   * @param {number} userId The id of the user.
   */
  async getUserApplicationForGame(gameId, userId) {
    const options = this.buildOptions({
      path: `${this.path}/${gameId}/applications/${userId}`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Removes the players application for the given game.
   * @param {number} gameId The id of the game.
   * @param {number} userId The id of the user removing the application.
   */
  async removeUserApplicationForGame(gameId, userId) {
    const options = this.buildOptions({
      path: `${this.path}/${gameId}/applications/${userId}`,
      method: "delete",
      body: {},
    });

    return this.apiCall(options);
  }
};
