# NYPR Newsletter Signup

This is a simple form widget to subscribe users to a newsletter. Currently configured strictly for mailchimp lists.

## Development

This is a React app, bootstrapped with [`create-react-app`](https://github.com/facebookincubator/create-react-app), which includes a testing framework and build tools.

First, clone this git repo

```
$ git clone https://github.com/nypublicradio/nypr-newsletter-signup.git
```
CD into the repo directory and install NPM

```
$ npm install
```

Make an env file. The sample file will include defaults to get you started.
```
$ cp .env.sample .env
```

Start a development server.
```
$ yarn start # or `npm start`
```
This will start a development server at http://localhost:3000. When it's running, a browser will open up at that address.

## Running Tests

* `yarn test` or `npm test`

## Deploying

Deployment is handled by circle. Commits to `master` will deploy to the demo environment (i.e. https://demo-apps.nypr.org/newsletter-signup). Tagged commits will deploy to the production environment.

## Environment Variables

Name | Description
--- |  ---
`AWS_BUCKET` | Destination bucket for deploys
`AWS_PREFIX` | Path prefix for deployed assets
`AWS_REGION` | AWS Region for infrastructure
`AWS_ACCESS_KEY_ID` | AWS access key id
`AWS_SECRET_ACCESS_KEY` | AWS secret access key
`REACT_APP_BUILD` | The build environment for the app. Either `demo` or `prod`.
`REACT_APP_THEMES` | The absolute URL of the themes bucket. Does not end in a trailing slash.
