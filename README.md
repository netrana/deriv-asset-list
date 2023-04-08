## Deriv Asset List

## Prerequisites

Install `nvm`:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
 
Install the latest LTS or minimum following version of `node`: (for example)
```bash
nvm install v16.17.0
source ~/.bashrc
```

Install `yarn` globally:
```bash
npm install -g yarn
```
version 1.22.19 was used for this application

## Install Packages

```bash
yarn install
```
### Configure Your .env File
In order to run the project correctly, you'll need a configured `.env` file.  Copy the `.env.template` and fill
in the missing values: 

```bash
cp .env.template .env
```
You can use the same values of the `.env.template` file to run in test mode.
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn lint`

We use a combination of ESLint and Prettier for linting. To run linting 
project-wide do:

```bash
yarn lint
```

### `yarn lint:fix`

If you'd like to fix eslint-fixable linting errors project-wide, run

```bash
yarn lint:fix
```

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn build:dev`
You should use this command to environment specific build with is dev (development) in this case
```
yarn build:dev
```
.

#### `E2E Tests`

We use Cypress for E2E Testing
To run the end-to-end test, do:
```bash
yarn cypress:open
```
Please keep the application open at http://localhost:3000 before running this command. 

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Run Application with `docker`:
```bash
docker-compose -f docker-compose.dev.yml  up --build -d
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##  Stop docker application:
```bash
docker-compose -f docker-compose.dev.yml  down
```

### Pre-commit hooks

We use some pre-commit hooks to ensure branch and commit naming conventions and also linting. It will check lint rules and run unit tests. If any one fails, it will stop committing the code, and then you need to fix those lint issues and failed test cases.