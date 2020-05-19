const LinkedAccounts = require("./endpoints/linkedAccounts");
const Authentication = require("./endpoints/authentication");
const Leaderboards = require("./endpoints/leaderboards");
const Contact = require("./endpoints/contact");
const Health = require("./endpoints/health");
const Search = require("./endpoints/search");
const Users = require("./endpoints/users");

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
    this.leaderboards = new Leaderboards(axios, "leaderboards");
    this.linkedAccounts = new LinkedAccounts(axios, "oauth");
    this.authentication = new Authentication(axios, "auth");
    this.contact = new Contact(axios, "contact");
    this.health = new Health(axios, "health");
    this.search = new Search(axios, "search");
    this.users = new Users(axios, "users");
  }
};
