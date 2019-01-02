const Hapi = require('hapi')
const routes = require('./routes')
const path = require('path') //For defining Directory Routes ;)

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
		
		//Define Routes
		server.route( routes )

	
		await server.start()

	}catch(exception){
		console.error( exception )
		process.exit(1)
	}
	//If not errors occurred in server.start()
	console.log(`Server Started in port ${server.info.uri}`)
}
init()