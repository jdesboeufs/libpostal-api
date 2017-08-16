const {Router} = require('express')
const postal = require('node-postal')

const api = new Router()

function ensureQuery(req, res, next) {
  if (!req.query.q) {
    return res.status(400).send({
      code: 404,
      message: 'q param is required'
    })
  }
  next()
}

api.get('/expand', ensureQuery, (req, res) => {
  res.send(postal.expand.expand_address(req.query.q))
})

api.get('/parse', ensureQuery, (req, res) => {
  res.send(postal.parser.parse_address(req.query.q))
})

module.exports = api
