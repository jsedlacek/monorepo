# Monorepo with yarn workspaces, typescript and parcel

Example monorepo containing three packages:

- [server](packages/server) - express server serving static files and API
- [client](packages/client) - client code that loads data from API and renders
- [shared](packages/shared) - types and code shared among server and client

## Setup

```
git clone https://github.com/jsedlacek/monorepo.git
cd monorepo
yarn
make run
```

Open http://localhost:8000
