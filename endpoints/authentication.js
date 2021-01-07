const Endpoint = require("./endpoint");

module.exports = class Authentication extends Endpoint {
  /**
   * Creates a new instance of the authentication class.
   * @param {AxiosInstance} client The axios client to be used to communicate with the api.
   * @param {string} path Any additional appended path (e.g /users)
   */
  constructor(client, path) {
    super(client, path);
  }

  /**
   * Get the current authenticated user.
   */
  async getCurrentUser() {
    const options = this.buildOptions({
      path: `${this.path}/user`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Performs a authentication request to the server.
   * @param identifier The identifier email or username of the user.
   * @param password The password for the authentication.
   */
  async login(identifier, password) {
    const options = this.buildOptions({
      path: `${this.path}/login`,
      method: "post",
      body: { identifier, password },
    });

    return this.apiCall(options);
  }

  /**
   * Perform the logout request of the current authenticated user.
   */
  async logout() {
    const options = this.buildOptions({
      path: `${this.path}/logout`,
      method: "post",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Performs the register request on the server.
   * @param {string} email The email of the registering user.
   * @param {string} username The username of the registering user.
   * @param {string} password The password of the registering user.
   */
  async register(email, username, password) {
    const options = this.buildOptions({
      path: `${this.path}/register`,
      method: "post",
      body: { email, username, password },
    });

    return this.apiCall(options);
  }

  /**
   * Performs a verification request on the given user.
   * @param {string} token The verification token of the registering user.
   */
  async verify(token) {
    const options = this.buildOptions({
      path: `${this.path}/verify?token=${token}`,
      method: "get",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Performs a reverification request on the authenticated user. Triggering
   * them again to go through the email verification process again.
   */
  async reverify() {
    const options = this.buildOptions({
      path: `${this.path}/reverify`,
      method: "post",
      body: {},
    });

    return this.apiCall(options);
  }

  /**
   * Starts the initiate password reset process.
   * @param {string} usernameOrEmail The users email or password to init the reset.
   */
  async initiatePasswordReset(usernameOrEmail) {
    const options = this.buildOptions({
      path: `${this.path}/forgot/password`,
      method: "post",
      body: {
        username_or_email: usernameOrEmail,
      },
    });

    return this.apiCall(options);
  }

  /**
   * Processes the initiate password reset process with the token and new password.
   * @param {string} token The verification token of the password reset.
   * @param {string} password The updated users password.
   */
  async processPasswordReset(token, password) {
    const options = this.buildOptions({
      path: `${this.path}/reset/password`,
      method: "post",
      body: {
        token,
        password,
      },
    });

    return this.apiCall(options);
  }

  /**
   * Update the given users password.
   * @param {string} oldPassword THe current/old users password.
   * @param {string} newPassword The new updated users password.
   */
  async updatePassword(oldPassword, newPassword) {
    const options = this.buildOptions({
      path: `${this.path}/reset/password`,
      method: "put",
      body: {
        oldPassword,
        newPassword,
      },
    });

    return this.apiCall(options);
  }

  /**
   *  initiate the email reset process for updating the users email.
   * @param {string} email The updated email address.
   * @param {string} password The current users password.
   */
  async initiateEmailReset(email, password) {
    const options = this.buildOptions({
      path: `${this.path}/reset/email`,
      method: "post",
      body: {
        email,
        password,
      },
    });

    return this.apiCall(options);
  }
};
