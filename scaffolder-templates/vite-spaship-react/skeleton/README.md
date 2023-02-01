# ${{values.spa_name}}

Some information about the APP

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4200](http://localhost:4200) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See this [Guide](https://vitest.dev/guide/)

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Deployments

***Note:*** `spashiprc` needs to be pre-configured on your system prior to using this script. Please check [SPAship documentation](https://spaship.io) to learn how to set this up correctly.

### Usage

You can use the deployment script for deploying any SPA to One Platform:

```sh
npm run deploy <PackageType> <PackageName> <PackagePath> <DeploymentEnv> <RefValue>
```

Deployment parameters:

1. `PackageType`: Based on the type of package, the value can either be `spa` or `service`.

2. `PackageName`: Name of the package directory. The expected directory naming convention is `package name` - `spa/service`. Examples: `foo-spa`, `bar-spa`.

3. `PackagePath`: Route to which the package needs to be deployed. Examples:  `/`, `/foo`, `/bar`, `/foo/bar`.

4. `DeploymentEnv`: The environment to which the package needs to be deployed. The value of this parameter needs to correspond with the name of an environment entry in your `.spashiprc` file. Examples: `qa`, `stage`, `opqa`, `opstage`.

5. `RefValue`: The reference version for this package. Usually this corresponds to a version number, however, it can also correspond to a string value for a valid ref. Example: `0.1.0`

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/1-Platform/one-platform/issues). You can also take a look at the [contributing guide](./CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

