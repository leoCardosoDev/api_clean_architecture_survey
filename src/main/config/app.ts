import express from 'express'
import setupMiddlewares from './middlewares'

const setupApp = express()
setupMiddlewares(setupApp)
export default setupApp
