const Endpoint = require("./endpoint");

module.exports = class Health extends Endpoint {
    /**
     * Creates a new instance of the health class.
     * @param {AxiosInstance} client The axios client to be used to communicate with the api.
     * @param {string} path Any additional appended path (e.g /users)
     */
    constructor(client, path) {
        super(client, path);
    }

    /**
     * Get all the related health information for the server.
     */
    async info() {
        const options = this.buildOptions({
            path: `${this.path}`,
            method: "get",
            body: {},
        });

        return this.apiCall(options);
    }

    /**
     * Gather all the related logs for the given server.
     */
    async logs() {
        const options = this.buildOptions({
            path: `${this.path}/logs`,
            method: "get",
            body: {},
        });

        return this.apiCall(options);
    }

    /**
     * Get all the related error logs.
     */
    async errorLogs() {
        const options = this.buildOptions({
            path: `${this.path}/logs/error`,
            method: "get",
            body: {},
        });

        return this.apiCall(options);
    }
};
