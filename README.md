Simple react app used to test some components/npm packages

Lessons Learned:
- Variables within the .env file will not load unless it begins with REACT_APP because of how react-scripts
[works](https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env). This made testing the components which required specific env vars to exist difficult to debug. For Example @fw/log required LOG_LEVEL to be set in the consuming app (this react app).
- To set environment variables via a .env file, 'dotenv' and webpack is needed.
- Because webpack was necessary, this presented MORE necessities such as the loaders/plugins in the webpack.config.js file
- Webpack kept throwing a warning which actually prevented the app from running in the browser.
```
WARNING in ./node_modules/moment/src/lib/locale/locales.js 78:12-82:13
Critical dependency: the request of a dependency is an expression
```
- The moment version had to be downgraded from 2.25.x to 2.24.x to resolve this issue before the compiler ran successfully

Environment variables can be set in the .env file.
This react app does not process react css modules where you can do "styles.yourCustomClassName" in the code.
To enable this, go to webpack.config.js and enable "modules" to true under the css rule.

# HOW TO USE:
- npm install
- npm start

