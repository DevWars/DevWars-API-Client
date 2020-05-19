module.exports = class ApiError extends Error {
    /**
     * Creates a new instance of the API error object.
     *
     * @param error.code The optional API code.
     * @param error.message The optional API error message.
     */
    constructor(code, message) {
        super(message);

        this.code = code;
        this.message = message;
    }
};
