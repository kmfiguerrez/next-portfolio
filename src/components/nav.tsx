'use client'

import { navigationLinks } from '@/constants/nav-links'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Nav() {
  return (
    <Disclosure as='nav' className='sm:py-2'>
      {({ open }) => (
        <>
          <div className='flex items-center justify-between'>
            {/* flex item */}
            <div className='sm:hidden'>            
              <Disclosure.Button className="rounded-md p-2 text-zinc-400 hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">                
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            {/* flex item */}
            <div className='font-medium tracking-wide text-lg'>              
              KMF
            </div>
            {/* flex item */}
            <div className='max-sm:hidden'>
              <ul className='flex'>
                {
                  navigationLinks.map(link => (
                    <li
                      key={link.href}
                      className='mx-2'
                    >
                      {link.label}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>









          {/*
            Use the `Transition` + `open` render prop argument to add transitions.
          */}
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {/*
              Don't forget to add `static` to your `Disclosure.Panel`!
            */}
            <Disclosure.Panel className="sm:hidden" static>
              <div className=''>
                <ul className='flex flex-col'>
                  {
                    navigationLinks.map(link => (
                      <li
                        key={link.href}
                        className='mx-2 my-1 hover:bg-zinc-700 rounded-md ps-2 py-2'
                      >
                        {link.label}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}