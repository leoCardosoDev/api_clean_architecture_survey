import express from 'express'
import setupMiddlewares from './middlewares'
import setupStaticFiles from './static-files'
import setupSwagger from '@/main/config/config-swagger'
import setupRoutes from './routes'

const setupApp = express()
setupStaticFiles(setupApp)
setupSwagger(setupApp)
setupMiddlewares(setupApp)
setupRoutes(setupApp)
export default setupApp
