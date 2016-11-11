import { createServer } from 'boiler-room-runner'
import { configureStore } from './store'
import routes from './routes'
import renderDocument from './lib/renderDocument/'
import createLocals from './lib/createLocals'

const store = configureStore()
const basepath = process.env.BASE_PATH

export default ({ assets }) => {
  const app = createServer({
    basepath,
    routes,
    store,
    createLocals,
    renderDocument,
    assets
  })

  app.staticRoutes = [
    '/'
  ]

  return app
}

export { default as renderDocument } from './lib/renderDocument/'
