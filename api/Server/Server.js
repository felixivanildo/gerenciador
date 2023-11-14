const dbRoutes = require("../Routes/routes")
const cors = require("cors")
const express = require('express')
const app = express();
const port = 3333;
const WebSocket = require('ws')




app.use(cors())
app.use(express.json({ limit: '40mb' }))


app.get('/', (req, resp) => {
    resp.send("Hi")
})


app.use('/api/v1', dbRoutes)

app.listen(port, () => console.log(`App listening on port ${port}`))



