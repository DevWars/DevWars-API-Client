const Endpoint = require("./endpoint");
const ApiError = require("./api.error");

module.exports = class Users extends Endpoint {
  /**
   * Creates a new instance of the user class.
   * @param {AxiosInstance} client The axios client to be used to communicate with the api.
   * @param {string} path Any additional appended path (e.g /users)
   */
  constructor(client, path) {
    super(client, path);
  }

  /******************************
   *  General
   ******************************

  /**
   * Gets all the users with paging.
   * @param {object} cursorDetails The paging details object containing the
   * optional after, before and first.
   */
  async usersWithPaging(cursorDetails) {
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
   * Update the given user by the provided id, the specified details are the
   * updated properties as per the servers requirements.
   * @param {number} userId The id of the user being updated.
   * @param {details} details The details of the user that are being changed.
   */
  async updateUser(userId, details) {
    const updatingBody = {};

    ["username", "role"].forEach((value) => {
      if (details[value] != null) updatingBody[value] = details[value];
    });

    const options = this.buildOptions({
      path: `${this.path}/${userId}`,
      method: "patch",
      body: updatingBody,
    });

    return this.apiCall(options);
  }

  /**
   * Deletes a user by the given id.
   * @param {number} userId The id of the user being removed.
   */
  async deleteUser(userId) {
    const options = this.buildOptions({
      path: `${this.path}/${userId}`,
      method: "delete",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Get the given user by the provided id.
   * @param {number} userId The id of the user.
   */
  async getUser(userId) {
    const options = this.buildOptions({
      path: `${this.path}/${userId}`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /******************************
   *  AVATAR
   ******************************/

  /**
   * Updates the given users avatar.
   * @param {number} userId The id of the user updating there avatar.
   */
  async updateUserAvatar(userId) {
    throw new ApiError(500, "Currently not implemented");
  }

  /******************************
   *  Statistics
   ******************************/

  /**
   * Gets the given users stats.
   * @param {number} userId The id of the user.
   */
  async getUserStatistics(userId) {
    const options = this.buildOptions({
      path: `${this.path}/${userId}/statistics`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Gets the given users game stats.
   * @param {number} userId The id of the user.
   */
  async getUserGameStatistics(userId) {
    const options = this.buildOptions({
      path: `${this.path}/${userId}/statistics/game`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /******************************
   *  Profile
   ******************************/

  /**
   * Gets the given users profile.
   * @param {number} userId The id of the user.
   */
  async getUserProfile(userId) {
    const options = this.buildOptions({
      path: `${this.path}/${userId}/profile`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * update the given users profile with the provided details.
   * @param {number} userId The id of the user.
   * @param {details} details The details of the users profile that are being changed.
   */
  async updateUsersProfile(userId, details) {
    const updatingBody = {};

    [
      "firstName",
      "lastName",
      "dob",
      "sex",
      "about",
      "forHire",
      "company",
      "websiteUrl",
      "addressOne",
      "addressTwo",
      "city",
      "state",
      "zip",
      "country",
      "skills",
    ].forEach((value) => {
      if (details[value] != null) updatingBody[value] = details[value];
    });

    const options = this.buildOptions({
      path: `${this.path}/${userId}/profile`,
      method: "patch",
      body: updatingBody,
    });

    return this.apiCall(options);
  }

  /******************************
   *  Email Permissions
   ******************************/

  /**
   * Gets the given users email permission.
   * @param {number} userId The id of the user.
   */
  async getUsersEmailPermissions(userId) {
    const options = this.buildOptions({
      path: `${this.path}/${userId}/emails/permissions`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Gets the given users email permission.
   * @param {number} userId The id of the user.
   * @param {details} details The details of the users email permissions that are being changed.
   */
  async updateUsersEmailPermissions(userId, details) {
    const updatingBody = {};

    ["news", "gameApplications", "schedules", "linkedAccounts"].forEach(
      (value) => {
        if (details[value] != null) updatingBody[value] = details[value];
      }
    );

    const options = this.buildOptions({
      path: `${this.path}/${userId}/emails/permissions`,
      method: "patch",
      body: updatingBody,
    });

    return this.apiCall(options);
  }

  /******************************
   *  Connections
   ******************************/

  /**
   * Gets the given users linked account connections.
   * @param {number} userId The id of the user.
   */
  async getUserConnections(userId) {
    const options = this.buildOptions({
      path: `${this.path}/${userId}/connections`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Gets the given users linked account connection by provider.
   * @param {number} userId The id of the user.
   * @param {string} provider The provider of the linked account, e.g twitch.
   */
  async getUserConnectionsByProvider(userId, provider) {
    const options = this.buildOptions({
      path: `${this.path}/${userId}/connections/${provider}`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /******************************
   *  Activities
   ******************************/

  /**
   * Get all the users game activities
   * @param {number} userId The id of the user.
   */
  async getUserActivities(userId) {
    const options = this.buildOptions({
      path: `${this.path}/${userId}/activities`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Get a single users activity by id.
   * @param {number} userId The id of the user.
   * @param {number} activityId The id of the activity.
   */
  async getUserActivityById(userId, activityId) {
    const options = this.buildOptions({
      path: `${this.path}/${userId}/activities/${activityId}`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /******************************
   *  Applications
   ******************************/

  /**
   * Get all the users game applications
   * @param {number} userId The id of the user.
   */
  async getUserGameApplications(userId) {
    const options = this.buildOptions({
      path: `${this.path}/${userId}/applications`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Get a single users game application.
   * @param {number} userId The id of the user.
   * @param {number} applicationId The id of the application.
   */
  async getUserGameApplicationById(userId, applicationId) {
    const options = this.buildOptions({
      path: `${this.path}/${userId}/applications/${applicationId}`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /******************************
   *  Games
   ******************************/

  /**
   * Get all the users games they have played in
   * @param {number} userId The id of the user.
   */
  async getAllUsersPlayedGames(userId) {
    const options = this.buildOptions({
      path: `${this.path}/${userId}/games`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Get a single users game that they played in .
   * @param {number} userId The id of the user.
   * @param {number} gameId The id of the application.
   */
  async getSingleUsersPlayedGameById(userId, gameId) {
    const options = this.buildOptions({
      path: `${this.path}/${userId}/games/${gameId}`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }
};
