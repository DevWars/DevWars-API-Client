const Endpoint = require("./endpoint");

module.exports = class Contact extends Endpoint {
    /**
     * Creates a new instance of the contact class.
     * @param {AxiosInstance} client The axios client to be used to communicate with the api.
     * @param {string} path Any additional appended path (e.g /users)
     */
    constructor(client, path) {
        super(client, path);
    }

    /**
     * Makes a contact request to the devwars team.
     * @param {object} details The contact us details containing the name, email and message.
     */
    async makeContactRequest(details) {
        const emailBody = [];

        ["name", "email", "message"].forEach((value) => {
            if (details[value] != null) emailBody[value] = details[value];
        });

        const options = this.buildOptions({
            path: `${this.path}`,
            method: "post",
            body: emailBody,
        });

        return this.apiCall(options);
    }
};
