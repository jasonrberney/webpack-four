# webpack-four
Webpack 4, Babel 7, React

This is a repo intended for understanding webpack 4, Babel 7, React and sass. This began with [this link](https://medium.freecodecamp.org/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff).

### webpack commands

Let’s break this down. When we run npm run start we’re telling it to run a package called webpack-dev-server. Then we pass it some configurations.

* webpack-dev-server serves a webpack app and updates the browser on changes.
* --mode development tells webpack to compile the code in development mode. This is basically to make the compilation time faster.
* --config config/webpack.base.config.js So by default if you have webpack.config.js file in your root app folder, you don’t have to supply the --config flag to it. But since I want to explicitly add all my webpack related configurations in the config folder, I pass in --config option that tells webpack where to look for the configuration
* --open command opens the browser, when webpack is done with its compilation.
* --hot flag tells webpack to actively watch for code changes in the src folder. If any changes happen, it reloads the browser.
* --history-api-fallback This option enables History API Fallback support in webpack-dev-server, effectively asking the server to fallback to index.html in the event that a requested resource cannot be found.
* --env.PLATFORM & --env.VERSION are custom flags that I pass in my configuration. The new flags added in our start command — env.PLATFORM=local — env.VERSION=stag are passed to our webpack configurations, which we can access with the env param in module.exports = function (env) {}.

The webpack DefinePlugin allows you to create global constants which can be configured at compile time.
