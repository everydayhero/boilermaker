import React from 'react'
{{#if styles}}import css from 'cxsync'{{/if}}
{{#if i18n}}import {translate} from 'hero-ui/lib/i18n'{{/if}}
{{#if styles}}import * as styles from './styles'{{/if}}
{{#if i18n}}import i18n from './i18n'

const t = translate.bind(null, i18n, 'au'){{/if}}

export default ({
  {{#if i18n}}
  title = t('title'),
  {{else}}
  title,
  {{/if}}
  onClick = () => {},
  children
}) => (
  <div{{#if styles}} className={css(styles.wrapper)}{{/if}} onClick={onClick}>
    <h1{{#if styles}} className={css(styles.title)}{{/if}}>{title}</h1>
    {children}
  </div>
)
