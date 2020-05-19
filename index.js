const Health = require("./endpoints/health");
const Authentication = require("./endpoints/authentication");

module.exports = class DevWarsApi {
    /**
     * A static body that will be joined with any given body that is also sent.
     * This can be used to sent api tokens.
     */
    static body;

    /**
     * Creates a new instance of the devwars api.
     * @param {AxiosInstance} client The axios client to be used to communicate with the api.
     */
    constructor(axios) {
        this.health = new Health(axios, "health");
        this.authentication = new Authentication(axios, "auth");
    }
};
