import 'module-alias/register'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import env from './config/env'

MongoHelper.connect(env.mongoUrl).then(async () => {
  const setupApp = (await import('./config/app')).default
  setupApp.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
}).catch(console.error)
