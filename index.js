const express = require('express')
const app = express()
const port = 8088

app.use(express.json())

app.use('/', (req, res)=>{
    res.send({ status: 200, message: "Oh, hi Mark."})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})