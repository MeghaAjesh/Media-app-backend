// 1 import json server
const jsonServer = require('json-server');

// 2 create a server application using the json server
const mediaAppServer = jsonServer.create()

//3 create a  middleware used by the json server
const middleware = jsonServer.defaults()

//4 create router : set up router for server application
const router =  jsonServer.router('db.json')

//5 Applying middleware to server 
mediaAppServer.use(middleware)

//6 Applying router to server 
mediaAppServer.use(router)

//7 define port
const PORT = 3000

//8 Starting the server
mediaAppServer.listen(PORT,()=>{
    console.log('Media App Server started on port:'  + PORT);

})