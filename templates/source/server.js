import { createServer } from 'boiler-room-runner'
{{#if constructicon}}
import renderDocument from 'constructicon/lib/renderDocument'
{{/if}}
import configureStore from './store'
import routes from './routes'

const store = configureStore()
const basepath = process.env.BASE_PATH

export default ({ assets }) => {
  const app = createServer({
    basepath,
    {{#if constructicon}}
    renderDocument,
    {{/if}}
    routes,
    store,
    assets
  })

  app.staticRoutes = [
    '/'
  ]

  return app
}
