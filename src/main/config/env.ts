export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://leodevnew:<password>@cluster0.1latbma.mongodb.net/',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'TfUf*89&'
}
