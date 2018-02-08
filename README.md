# Boilermaker

A generator for creating projects and various components, designed with the Boiler Room stack: [Boiler Room Builder](https://github.com/everydayhero/boiler-room-builder) and [Boiler Room Runner](https://github.com/everydayhero/boiler-room-runner). Boilermaker uses our standard toolchain but cleanly excludes the parts that your project doesn't need, leaving you to focus on writing the code that matters.

In other words, where Boiler Room got you from zero to dev, Boilermaker gets you
from zero to :shipit:.

## Install

**NPMers**

```shell
npm i brm -g
```

**Yarners**

```shell
yarn global add brm
```

## Usage

Everything begins with running `brm create`. When creating a project, a new directory will we created. For the other commands, run from the root of your existing project.

### Project

This will take you through a sequence of questions for customising your project, and then build out a project based on your answers. Install your dependencies, run `yarn start`, and you're set. For example:

```
brm create
```

```
❯ project - Create a new boiler room project
  Stateless - Create a new stateless view component
  Action & Reducer - Create an Action & Reducer set
```

```
? What is your project called? My New Project
? Enter a short project description (optional): My description
? Will this project use Prismic for a CMS? Yes
? Do you use Constructicon? Yes
? Do you use Supporticon? Yes
? Will you be writing tests in this project? Yes
? Will you be deploying this project using Buildkite? Yes
? Need a repo made? No
```

```
cd my-new-project && yarn
yarn start
```

#### Repo Creation

When creating a project, Boilermaker will offer to create a repository for you as well. In order to do this, a [GitHub Personal Access Token](https://github.com/settings/tokens/new) is required, with the `repo` scope enabled. This token must be available under the `BRM_GITHUB_API_TOKEN` environment variable.

### Stateless Component

After answering the questions a component will be created, along with any necessary extra files, based on your answers.

### Action & Reducer

After answering the questions a `store` directory will be created where you selected, containing the Redux action and reducer. If a `source/store/index.js` file is found, it will be modified to include the new reducer.

The default action created includes a basic (invalid) GET request to a URL. Make sure you update this to what you need!
