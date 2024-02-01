# Microfrontend Admin Panel App

This repository contains the source code for the Microfrontend Admin Panel App. It is a modular frontend application that serves as the administrative interface for the [E-shop (host) App](https://github.com/Sergey-Nag/mf-host-app).
The backend (GraphQL and Rest API server) can be found [here](https://github.com/Sergey-Nag/cms-data-api)

## Project Setup

### Prerequisites

Make sure you have Node.js (v20)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sergey-Nag/mf-admin-app.git
   cd mf-admin-app
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

## Available Scripts

### Development

To start the development server with hot-reloading:

```bash
npm start
```

### Production Build

To create a production build of the application:

```bash
npm run build
```

### Serve Production Build

To serve the production build locally:

```bash
npm run serve
```

### Clean Build Artifacts

To clean the generated build artifacts:

```bash
npm run clean
```

### Code Linting

To run ESLint for code linting:

```bash
npm run lint
```

### Fix Linting Issues

To automatically fix linting issues (if possible):

```bash
npm run lint:fix
```

### Pre-commit Linting

Linting will run automatically before committing changes thanks to Husky and lint-staged. No need to run this manually.

## API Server App
To work with data, you need to run the [API Server](https://github.com/Sergey-Nag/cms-data-api) app first.

## Dependencies

This application uses several dependencies for development and functionality. Key dependencies include:

- React and ReactDOM for building the user interface.
- React Router for managing application routing.
- Apollo Client for handling GraphQL queries.
- Material-UI for UI components.
- Formik and Yup for form handling and validation.
