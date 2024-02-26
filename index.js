const express = require('express')
const app = express()
const port = 8088

app.use(express.json())

app.use('/', (req, res)=>{
    res.send({ status: 200, message: "Hello world from Module 10 part 2 exercise 2"})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})