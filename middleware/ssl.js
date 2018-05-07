import isHTTPS from 'is-https'

// Default options
const options = {
  xForwardedProto: true,
  redirectPort: 443,
  redirectHost: process.env.HOST,
  redirectUnknown: true,
  statusCode: 307,
  redirect: process.env.NODE_ENV === 'dev'
}

export default (req, res, next) => {
  const _port = options.redirectPort === 443 ? '' : `: ${options.redirectPort}`
  if (options.redirect) {
    console.log('REDIRECT')
    const _isHttps = isHTTPS(req, options.xForwardedProto)
    const shouldRedirect = _isHttps === false || (options.redirectUnknown && _isHttps === null)
    if (shouldRedirect) {
      const ـredirectURL = 'https://' + (options.redirectHost || req.headers.host) + _port + req.url
      res.writeHead(options.statusCode, {
        Location: ـredirectURL
      })
      return res.end()
    }
  }

  next()
}
