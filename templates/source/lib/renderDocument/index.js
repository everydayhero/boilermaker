import Document from '../../components/Document'
import Helmet from 'react-helmet'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

module.exports = ({
  assets,
  content,
  state = {}
}) => {
  const styles = assets.filter((asset) => asset.match(/\.css$/))
  const scripts = assets.filter((asset) => asset.match(/\.js$/))
  return '<!doctype html>' + renderToStaticMarkup(
    createElement(Document, {
      head: Helmet.rewind(),
      styles,
      scripts,
      content,
      state
    })
  )
}
