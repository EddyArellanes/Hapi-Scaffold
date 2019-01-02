const Hapi = require('hapi')
const path = require('path') //For defining Routes ;)
//Plugins
const inert = require('inert') //For serving static files: https://www.npmjs.com/package/inert
const vision = require('vision') //For create frontend template responses
//Engine
const handlerbars = require('handlebars')

const server = Hapi.server({
	port: process.env.port || 5000,
	host: 'localhost',
	routes: {
		files:{
				relativeTo: path.join(__dirname, 'public')
		}
	}
})



async function  init() {
	/** Server 
	 * @return {string}
	 */
	try{
		await server.register( inert)
		await server.register( vision)

		//This is the configuration of engines for views in Hapi.js
		server.views({
			engines: {
				hbs: handlerbars
			},
			relativeTo: __dirname, //We need to define the path of views outside of public
			path: 'views',
			layout: true,
			layoutPath: 'views'
		})	
		//Example for how to serve Static file
		server.route({
			method: 'GET',
			path: '/{param*}',
			handler: { //Here we don't use the standar of Hapi, we use capabilities of Plugin Inert
				directory: {
					path: '.',
					index: ['index.html']
				}
			}
		})
		//Example for how to server Handlebars Layout
		server.route({
			method: 'GET',
			path: '/',
			handler: (request, h ) =>{
				//The Magic of Vision will inject the variables into Hbs files
				return h.view( 'index', {
					title: 'Home'
				})
			}
		})
		//Second Example
		server.route({
			method: 'GET',
			path: '/register',
			handler: (request, h ) =>{
				//The Magic of Vision will inject the variables into Hbs files
				return h.view( 'register', {
					title: 'Register'
				})
			}
		})		
		//Example how to receive a post 
		server.route({
			method: 'POST',
			path: '/create-user',
			handler: (request, h ) =>{
				console.log(request.payload)
				return 'Listo :::D'
			}
		})		
		server.route({
			method: 'GET',
			path: '/api/examples/string',
			handler: ( request, h ) =>{
				//h have h.response and h.redirect
				return h.response("Hello World").code(200)
			}
		})

		server.route({
			method: 'GET',
			path: '/api/examples/redirect',
			handler: ( request, h ) =>{
				return h.redirect("https://eddyarellanes.github.io")
				
			}
		})


	
		await server.start()

	}catch(exception){
		console.error( exception )
		process.exit(1)
	}
	//If not errors occurred in server.start()
	console.log(`Server Started in port ${server.info.uri}`)
}
init()