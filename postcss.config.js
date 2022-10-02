// Copyright (c) 2022 Evolving Software Corporation
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',
    },
    autoprefixer: {},
  },
}
