import { createServer } from 'boiler-room-runner'
{{#if constructicon}}
import renderDocument from 'constructicon/lib/renderDocument'
{{/if}}
import createStore from './store'
import routes from './routes'

const basepath = process.env.BASE_PATH

export default ({ assets }) => {
  const app = createServer({
    basepath,
    {{#if constructicon}}
    renderDocument,
    {{/if}}
    routes,
    createStore,
    assets
  })

  app.staticRoutes = [
    '/'
  ]

  return app
}
