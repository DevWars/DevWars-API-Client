const LinkedAccounts = require("./endpoints/linkedAccounts");
const Authentication = require("./endpoints/authentication");
const Leaderboards = require("./endpoints/leaderboards");
const Activities = require("./endpoints/activities");
const Endpoint = require("./endpoints/endpoint");
const Contact = require("./endpoints/contact");
const Health = require("./endpoints/health");
const Search = require("./endpoints/search");
const Users = require("./endpoints/users");
const Games = require("./endpoints/games");

class DevWarsApi {
  /**
   * Creates a new instance of the devwars api.
   * @param {AxiosInstance} client The axios client to be used to communicate with the api.
   */
  constructor(axios) {
    this.leaderboards = new Leaderboards(axios, "leaderboards");
    this.linkedAccounts = new LinkedAccounts(axios, "oauth");
    this.authentication = new Authentication(axios, "auth");
    this.activities = new Activities(axios, "activities");
    this.contact = new Contact(axios, "contact");
    this.health = new Health(axios, "health");
    this.search = new Search(axios, "search");
    this.users = new Users(axios, "users");
    this.games = new Games(axios, "games");
  }

  /**
   * A static body that will be joined with any given body that is also sent.
   * This can be used to sent api tokens.
   */
  set body(value) {
    Endpoint.body = value;
  }
}

module.exports = DevWarsApi;
