import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

const setupApp = express()
setupMiddlewares(setupApp)
setupRoutes(setupApp)
export default setupApp
