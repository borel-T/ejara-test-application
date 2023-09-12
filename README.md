# Ejara test application

This a a little client side note writer application. Using this app users can :

- Create notes and customize their look
- Store important notes into archives
- Update notes information
- Delete notes

## How to run the project

### Prerequisites

- Make sure you have Node, installed on your local computer
- Node comes by default with npm and npx. (No need to install them further)

### install app dependencies

Use this command, on your command line terminal to install all application dependencies

```
npm install
```

### build the application

Build the application for production mode. This will create a build directory with statics html,css,and js files

```
npm run build
```

### install local 'server'

Run the following command to serve the build version in a static server

```
npm install -g serve
```

### serve the application

Serve the application from your localhost

```
serve -s build
```

And Voila! The app is now running in production mode! Go to http://localhost:3000/
