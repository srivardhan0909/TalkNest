const jwt = require('jsonwebtoken')

const checkAuthCookie = (cookieName) => {
  return (req, res, next) => {
    const token = req.cookies[cookieName]
    if (!token) {
      console.log('No token found')
      return res.status(401).json({ message: 'Unauthorized' })
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = decoded
    //   console.log(req.user)
      return next()
    } catch (err) {
      console.log(err)
      return res.status(401).json({ message: 'Unauthorized' })
    }
  }
}

module.exports = { checkAuthCookie }
