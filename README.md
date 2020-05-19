# DevWars-API-Client

<div align="center">
  <br>
  <img alt="DEV" src="https://i.imgur.com/D9giOVL.png" width="250px">
  <h1>DevWars API Client</h1>
  <strong>A simple API client to wrap Axios</strong>
</div>
<br>
<p align="center">
  <a href="">
    <img src="https://img.shields.io/badge/Nodejs-v12.0.0-green.svg" alt="nodejs version">
  </a>
    <img src="https://flat.badgen.net/dependabot/DevWars/devwars-api-client/?icon=dependabot" alt="Dependabot Badge" />
</p>

A module-based implementation of the DevWars API, designed to be pulled into a project and easily used.

## Getting Started

### Prerequisites

- [Nodejs](https://nodejs.org/en/): 12.0 or higher

### Dependency Installation

Run `npm install` to install dependent node_modules.

### Usage

First, you must ensure that the given Axios client is pre-configured with the required base URL and any additional properties required. Since the API will work from the base address and not the full address.

```js
const axiosClient = axios.create({ baseURL: "http://localhost:8080" });
const api = new DevWarsApi(axiosClient);

await api.games.createGame({
  startDate: new Date(),
  season: 3,
  mode: "Classic",
  title: "StarWars Shop",
  status: 3,
  templates: {},
});
```

Sometimes is important to provide a given value within the body for all valid requests that use it. This can be done by setting the static body on the DevWars client.

```js
DevWarsApi.body = { apiKey: "important-key" };
```

## Contributors

This project exists thanks to all the people who [contribute](https://github.com/DevWars/devwars-api-client/graphs/contributors). We encourage you to contribute to DevWars but ensure to open a related issue first. Please check out the [contributing](CONTRIBUTING.md) to DevWars guide for guidelines about how to proceed.

## License

> You can check out the full license [here](LICENSE)

This project is licensed under the terms of the **MIT** license.
