# Project Name
Proxy server

> Project description
This proxy server pulls together all services from Team Feedback's modules.

## Related Projects

  - https://github.com/rpt23-team-feedback/kimarie-proxy
  - https://github.com/rpt23-team-feedback/max-proxy
  - https://github.com/rpt23-team-feedback/mark-proxy
  - https://github.com/rpt23-team-feedback/kara-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions
- Start up the proxy server by running 'npm run server-dev' in your terminal.
- Navigate to the root of each service and in separate terminals run the commands for webpack and express for each service.
- Open your browser and follow the example below -

Navigating to a bundleId should render all relevant data for that bundle from each of the 5 services.
Example: 'http://localhost:3202/1' <-- should render persisted data from each service for bundle 1.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- axios 0.20.0
- express 4.17.1
- react 16.5.2
- react-dom 16.5.2

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
