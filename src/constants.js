// Copyright (c) 2022 Evolving Software Corporation
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export const navigation = [
  { name: 'Github', href: 'https://github.com/Evolving-Solutions', current: true },
    { name: 'Evolving Software', href: '#', current: false },
]
export const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]
export const projects = [
    {
        name: 'Workcation',
        href: '#',
        siteHref: '#',
        repoHref: '#',
        repo: 'debbielewis/workcation',
        tech: 'Laravel',
        lastDeploy: '3h ago',
        location: 'United states',
        starred: true,
        active: true,
    },
    // More projects...
]
export const activityItems = [
    { project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    // More items...
]

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

