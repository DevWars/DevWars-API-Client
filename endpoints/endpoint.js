const ApiError = require("./api.error");

module.exports = class Endpoint {
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
            : Object.assign({}, DevWarsApi.body, body);
    }

    /**
     * Performs the api call with the fetch operator based on the options.
     * @param {object} options The options for the request.
     */
    async apiCall(options) {
        try {
            const body = this.getBodyContent(options.method, options.body);
            const result = await this.client[options.method](
                options.path,
                body
            );

            return result.data;
        } catch (error) {
            const response = error.response.data;
            throw new ApiError(
                error.response.status,
                response.error || "Something went wrong."
            );
        }
    }
};
