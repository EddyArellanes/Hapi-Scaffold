const Hapi = require('hapi')

const server = Hapi.server({
	port: process.env.port || 5000,
	host: 'localhost'
})



async function  init() {
	server.route({
		method: 'GET',
		path: '/api/users',
		handler: ( request, h ) =>{
			return 'Hello World'
		}
	})
	
	try{
		await server.start()
	}catch(exception){
		console.error( exception )
		process.exit(1)
	}
	//If not errors occurred in server.start()
	console.log(`Server Started in port ${server.info.uri}`)
}
init()