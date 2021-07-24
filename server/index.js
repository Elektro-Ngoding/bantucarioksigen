require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3005
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})