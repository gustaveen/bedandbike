/* eslint-disable global-require */

const localeData = [
  ...require('react-intl/locale-data/en'),
  ...require('react-intl/locale-data/sv'),
]

module.exports = {
  localeData,
  languages: [
    { value: 'en', text: 'English' },
    { value: 'sv', text: 'Svenska' },
  ],
}
