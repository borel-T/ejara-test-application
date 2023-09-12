# Ejara test application

This a a little client side note writer application. Using this app users can :

- Create notes and customize their look
- Store important notes into archives
- Update notes information
- Delete notes

## How to run the project

#### Prerequisites

- Make sure you have Node, installed on your local computer
- Node comes by default with npm and npx. (No need to install them further)

#### installing app dependencies

Open the project with any code editor. Make you you are in the root directory and use this command, on your command line terminal to install all application dependencies

```
npm install
```

### How to run the project DEV-CODE

after installing dependencies, simply use "npm start" to run the dev-code

```
npm run start
```

### How to run the project BUILD

#### build the application

Build the application for production mode. This will create a build directory with statics html,css,and js files

```
npm run build
```

#### install local 'server'

Run the following command to serve the build version in a static server

```
npm install -g serve
```

#### serve the application

Serve the application from your localhost

```
serve -s build

```

NB : If you are on windos, you might encouter errors serving the application if you PC does not allow running scripts. To solve this, open your power shell as administrator, and execute the command

```
Set -ExecutionPolicy -ExecutionPolicy RemoteSigned
```

And Voila! The app is now running in production mode! Go to http://localhost:3000/
