const ApiError = require("./api.error");

class Endpoint {
  /**
   * Creates a endpoint interface to be implemented.
   * @param {AxiosInstance} client The axios client to be used to communicate with the api.
   * @param {string} path Any additional appended path (e.g /users)
   */
  constructor(client, path) {
    this.client = client;
    this.path = path;
  }

  /**
   * Build up a request that will be sent to the server.
   * @param {object} options The related options to the endpoint call.
   */
  buildOptions(options) {
    this.validateRequestContent(options);
    return options;
  }

  /**
   * All options must be specified before making a call
   * @param {object} options The options for the request.
   */
  validateRequestContent(options) {
    ["method", "path", "body"].forEach((option) => {
      if (!options[option]) {
        throw new Error(`${option} has to be specified`);
      }
    });
  }

  /**
   * Gets the body content based on the method, (returned stringify for json
   * server expectation)
   * @param {string} method The method of the request.
   * @param {object} body The body to be sent.
   */
  getBodyContent(method, body) {
    return ["get", "head"].includes(method.toLowerCase())
      ? undefined
      : Object.assign({}, Endpoint.body, body);
  }

  /**
   * Gets the url for the given request. If this is a get request, and the
   * extra body parameters have been specified, then bind them to the url.
   * server expectation)
   * @param {string} method The method of the request.
   * @param {string} url The raw url without any changes.
   */
  getUrl(method, url) {
    if (
      !["get", "head"].includes(method.toLowerCase()) ||
      Object.keys(Endpoint.body).length == 0
    )
      return url;

    const queryParams = [];

    for (const key in Endpoint.body) {
      queryParams.push(`${key}=${Endpoint.body[key]}`);
    }

    url += url.includes("?") ? "&" : "?";
    return `${url}${queryParams.join("&")}`;
  }

  /**
   * Performs the api call with the fetch operator based on the options.
   * @param {object} options The options for the request.
   */
  async apiCall(options) {
    try {
      const body = this.getBodyContent(options.method, options.body);
      const url = this.getUrl(options.method, options.path);

      let result = null;

      if (options.method === "delete") {
        result = await this.client[options.method](url, { data: body });
      } else {
        result = await this.client[options.method](url, body);
      }

      return result.data;
    } catch (error) {
      if (error.response == null || error.response.data == null) {
        throw new ApiError(-1, error.message || "Something went wrong.");
      }

      const response = error.response.data;
      throw new ApiError(
        error.response.status,
        response.error || "Something went wrong."
      );
    }
  }
}

/**
 * A static body that will be joined with any given body that is also sent. This
 * can be used to sent api tokens.
 *
 * This is defined here instead of a static property to be used as a external
 * project.
 */
Endpoint.body = {};

module.exports = Endpoint;
