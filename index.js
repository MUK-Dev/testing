const express = require('express')

const app = express()

app.get('/', (request, response, next) => {
  response.send('Hello from the API Server')
})

/*
GET 
POST
PUT
PATCH
DELETE
*/

app.listen(5000, () => console.log('Server running on port 5000'))
