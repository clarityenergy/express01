const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
// do a bunch of stuff
    response.status(200).json({
        message: "Hello nerds",
        status: 200,
    })

})

app.listen(port, () => console.log('listening on http://localhost:' + port)) 


// client server . . . stateless . . . cacheable . . . uniform interface . . . layered system