# Installation
> npm install hapi

> npm install joi

> npm install bcryptjs

> npm install nodemon -D

- Hapi is the core of our Server
- Joi isfor validate data from user
- Bcryptjs is a library for hash passwords.
- Nodemon is a Dev dependency used for auto reload in any change of out code

# Structure
- server.js: It's the main file that run the server, here is instanciated Hapi
- routes.js: Here I defined all endpoints of the API and of the UI if we are using Handlebars or smt like that.
- config: Here are put all secrets and data for configurations like firebase.json and etc.
- controllers: All routes are targeting to a specific controller that handles the logic of our business
- public: All Frontend Static are allowed here.
- views: This folder is if you will use handlerbraces or any kind of engine templates.

# Firebase
`If you need connect your Backend to a Firebase BaaS just need apply the following steps`
> npm install firebase-admin
# FullStack Application
`If you don't want to build an web application with Angular,React or Vue, you can do that in the classic mode like Php. To do this you need to use this Modules:`
- npm install handlebars
- npm install vision

- Handlebards allows you to render dynamic data in Html files
- Vision is a Hapi's Plugin for create template responses

`I have insert an example called server-handlebars, if you want to know how it works`
`However I prefer to use Node as Backend only and delegate UI to Frontend Framework... use Vue :3`


`That's all for today 02/01/19`