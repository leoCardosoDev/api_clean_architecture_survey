export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost/clean-node-api',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'TfUf*89&'
}
