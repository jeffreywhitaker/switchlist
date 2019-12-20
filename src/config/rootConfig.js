let AXIOS_URI

const NODE_ENV = process.env.REACT_APP_FORCE_NODE_ENV || process.env.NODE_ENV

if (NODE_ENV === 'development') {
  AXIOS_URI = 'http://localhost:5000'
} else if (NODE_ENV === 'production') {
  AXIOS_URI = 'https://switchlistsite-api.herokuapp.com'
}

export { AXIOS_URI }
