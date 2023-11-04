import express from 'express'
import setupMiddlewares from './middlewares'
import setupSwagger from '@/main/config/config-swagger'
import setupRoutes from './routes'

const setupApp = express()
setupSwagger(setupApp)
setupMiddlewares(setupApp)
setupRoutes(setupApp)
export default setupApp
