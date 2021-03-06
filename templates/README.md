# {{titleCase name}}

{{#if description}}
{{description}}

{{/if}}
---

<!-- Site links
[Staging](https://www.example.com) | [Production](https://www.example.com)
-->

## Usage

The {{titleCase name}} project assumes that `yarn` is available globally. If you don't have it, check it out at the [Yarn website](https://yarnpkg.com/docs/getting-started).

### Setup

```shell
yarn
```

This will install dependencies.

### Development

```shell
yarn start
```

This will run a local development server at [http://localhost:8080](http://localhost:8080).

{{#if deployment}}
### Deployment

```shell
yarn deploy:staging
```

This will build and deploy the site to Github Pages

```shell
yarn deploy:prod
```

This will build and deploy the site to production
{{/if}}
