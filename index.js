const express = require('express')
const app = express()
const port = process.env.PORT || 51201

app.get('/', (req, res) => {
    res.send({"Orang keren" : "Glen Zacharias"})
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})