import React from 'react'
import { renderToString } from 'react-dom/server'
import cxs from 'cxsync'
import Page from './layouts/Page'

const renderScripts = (scripts) => (
  scripts.map((script) => `<script src=${script}></script>`).join('')
)

const renderStyles = (styles) => (
  styles.map((style) => `<link rel="stylesheet" href=${style} />`).join('')
)

export const renderDocument = ({ assets = [], content = '' }) => {
  const styles = assets.filter((asset) => asset.match(/\.css$/))
  const scripts = assets.filter((asset) => asset.match(/\.js$/))

  return (`
    <!doctype html>
    <html>
      <head>
        <title>Boilermaker App</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        ${renderStyles(styles)}
        <style>${cxs.css || ''}</style>
      </head>
      <body>
        <main id="mount">${content}</main>
      </body>
      ${renderScripts(scripts)}
    </html>
  `)
}

export default ({ assets, ...props }) => {
  const app = (route = '/') => (
    Promise.resolve({
      result: renderDocument({
        content: renderToString(React.createElement(Page)),
        assets
      })
    })
  )

  app.staticRoutes = [
    '/'
  ]

  return app
}
