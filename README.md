# Express API

## Description

This project is designed to maintain the configuration basics of a Webpack setup with TypeScript. It provides a starting point for building applications using Webpack, TypeScript, Babel, and Express.

## Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/cml096/webpack.git
   ```

2. Install the dependencies:
   ```shell
   npm install
   ```

## Usage

### Development Mode

To start the project in development mode, run the following command:
```shell
npm run dev
```
This command will bundle the source code using Webpack in development mode and start the application.

### Production Build

To create a production-ready build of the project, run the following command:
```shell
npm run build
```
This command will bundle the source code using Webpack in production mode, optimizing and minifying the output for better performance.

### Start the Application

To start the application from a pre-built bundle, run the following command:
```shell
npm start
```
This command assumes that you have already built the project using the `npm run build` command.

## Configuration

The project uses Webpack to bundle the TypeScript source code. The configuration file `webpack.config.js` contains the necessary settings for bundling the code.

## Dependencies

- @babel/core: ^7.22.5
- @babel/preset-env: ^7.22.5
- babel-loader: ^9.1.2
- express: ^4.18.2

## Development Dependencies

- @types/express: ^4.17.17
- ts-loader: ^9.4.3
- typescript: ^5.1.3
- webpack: ^5.86.0
- webpack-cli: ^5.1.4
- webpack-node-externals: ^3.0.0

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
