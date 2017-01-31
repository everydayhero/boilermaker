import React from 'react'
{{#if styles}}
import css from 'cxsync'
{{/if}}
{{#if i18n}}
import {translate} from 'hero-ui/lib/i18n'
{{/if}}
{{#if styles}}
import * as styles from './styles'
{{/if}}
{{#if i18n}}
import i18n from './i18n'

const t = translate.bind(null, i18n, 'au')
{{/if}}

const {{name}} = ({
  title,
  onClick = () => {},
  children
}) => (
  <div{{#if styles}} className={css(styles.wrapper)}{{/if}} onClick={onClick}>
    {{#if i18n}}
    <h1{{#if styles}} className={css(styles.title)}{{/if}}>{title || t('title')}</h1>
    {{else}}
    <h1{{#if styles}} className={css(styles.title)}{{/if}}>{title}</h1>
    {{/if}}
    {children}
  </div>
)

export default {{name}}
