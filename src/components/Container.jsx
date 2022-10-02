// Copyright (c) 2022 Evolving Software Corporation
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import clsx from 'clsx'

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}
