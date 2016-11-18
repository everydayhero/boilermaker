import React from 'react'
{{#if styles}}import css from 'cxsync'{{/if}}
{{#if i18n}}import {translate} from 'hero-ui/lib/i18n'{{/if}}
{{#if styles}}import * as styles from './styles'{{/if}}
{{#if i18n}}import i18n from './i18n'

const t = translate.bind(null, i18n, 'au'){{/if}}

export default ({
  title,
  onClick = () => {},
  children
}) => (
  <div{{#if styles}} className={css(styles.wrapper)}{{/if}} onClick={onClick}>
    <h1{{#if styles}} className={css(styles.title)}{{/if}}>{title{{#if i18n}} || t('title'){{/if}}}</h1>
    {children}
  </div>
)
