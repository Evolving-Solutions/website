// Copyright (c) 2022 Evolving Software Corporation
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Copyright (c) 2022 Evolving Software Corporation
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
// Contact form in tailwind
import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CheckIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

function Contactform({ open, onClose }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const submitForm = (e) => {
    e.preventDefault()
    console.log('Form values', e.target.elements)
    // send items to server
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        setMessage(
          'Thank you for your message. We will get back to you shortly.'
        )
        setTimeout(() => {
          onClose()
        }, 3000)
      })
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <form
                    action="#"
                    method="POST"
                    className="space-y-6"
                    onSubmit={submitForm}
                  >
                    <div className="flex flex-row gap-6">
                      <div>
                        <label htmlFor="firstname" className="sr-only">
                          First name
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          autoComplete="first name"
                          placeholder="First name"
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstName}
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-coral-500
                         focus:ring-coral-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastname" className="sr-only">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last name"
                          id="lastname"
                          autoComplete="Last name"
                          placeholder="Last name"
                          onChange={(e) => setLastName(e.target.value)}
                          value={lastName}
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-coral-500
                         focus:ring-coral-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="mobile" className="sr-only">
                        Mobile number
                      </label>
                      <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        type="tel"
                        name="mobile"
                        id="mobile"
                        autoComplete="phone"
                        placeholder="Mobile number"
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-coral-500 focus:ring-coral-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="mobile" className="sr-only">
                        Email
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        name="mobile"
                        id="email"
                        autoComplete="email"
                        placeholder="Email"
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-coral-500 focus:ring-coral-500 sm:text-sm"
                      />
                    </div>
                    {message && (
                      <div className="text-sm text-red-600">{message}</div>
                    )}
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-coral-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-coral-700 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:ring-offset-2"
                      >
                        Create your account
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Contactform
