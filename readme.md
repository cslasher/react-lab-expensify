# Expensify

Expense app with React and Firebase.

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes on
how to deploy the project on a live system.

### Prerequisites

Use NPM or Yarn

### Installing

Install with NPM

```
npm install
```

or Yarn

```
yarn install
```

Configure the following environment files or set the environment for the
production:

* .env.development
* .env.test

Using Firebase environment:

```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_DATABASE_URL=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
```

## Running the tests

Run the test using Yarn:

```
yarn test
```

In watch mode:

```
yarn test -- --watch
```

## Build

Build with Development:

```
yarn run build:dev
```

Build with Production:

```
yarn run build:prod
```

## Running the app

Development watch mode:

```
yarn run dev-server
```

Production mode:

```
yarn start
```

## Authors

* **Edwin Liu** - with features modified from Andrew Mead's
  [The Complete React Web Developer Course (with Redux)](https://www.udemy.com/react-2nd-edition/learn/v4/overview)
  Expensify App.

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details
