// src/components/Header.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <header className="bg-blue-600 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-2xl font-bold">Springdale Public School</div>
//         <nav>
//           <Link className="mx-2" to="/">Home</Link>
//           <Link className="mx-2" to="/about-us">About Us</Link>
//           <Link className="mx-2" to="/academics">Academics</Link>
//           <Link className="mx-2" to="/admissions">Admissions</Link>
//           <Link className="mx-2" to="/faculty">Faculty</Link>
//           <Link className="mx-2" to="/students">Students</Link>
//           <Link className="mx-2" to="/gallery">Gallery</Link>
//           <Link className="mx-2" to="/contact-us">Contact Us</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Academics', href: '/academics', current: false },
  { name: 'Admissions', href: '/admissions', current: false },
  { name: 'Faculty', href: '/faculty', current: false },
  { name: 'Students', href: '/students', current: false },
  { name: 'Gallery', href: '/gallery', current: false },
  { name: 'Contact Us', href: '/contact-us', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </Disclosure.Button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
           

            
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default Header;

