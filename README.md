## Flowcode UI

## Prerequisites

Install `nvm`:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
 
Install the latest LTS `node`: (for example)
```bash
nvm install v14.16.1
source ~/.bashrc
```

Install `yarn` globally:
```bash
npm install -g yarn
```

## Install Packages

```bash
yarn install
```


## Run Application with `docker`:
```bash
docker-compose -f docker-compose.dev.yml  up --build -d
```

##  Stop docker application:
```bash
docker-compose -f docker-compose.dev.yml  down
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Linting 

We use a combination of ESLint and Prettier for linting. To run linting 
project-wide do:

```bash
yarn lint
```

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

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Gif flow
### Default branches and their uses
We have `develop` and `master` as default branches. 
- `develop` : All the features and bug fixes should be pushed here.
- `master`: Releases and hot fixes should be pushed here.

### Branching naming convention
We should add a prefix based on the need with the branch name </br>
- feature/** (for adding any feature e.g feature/add-footer)
- bugfix/** (for fixing any bug e.g bugfix/`<bug issue number>`)
- hotfix/** (for any hotfix e.g. hotfix/`<bug issue number>`)

### Creating PR
You should create a PR to add any code (even a single character) and 
add reviewer. Once the PR is approved, the reviewer/author can merge to target branch.

For feature and bugfix always create branch from `develop` and for hotfix create from `master`. 

**Note: After any hotfix gets merged, push the changes back to develop as well**