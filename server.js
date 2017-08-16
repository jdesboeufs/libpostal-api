const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const api = require('./')

const app = express()
app.set('json spaces', 2)

app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'))
} else {
  app.use(morgan('dev'))
}

app.use(api)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Start listening on port ' + port)
})
