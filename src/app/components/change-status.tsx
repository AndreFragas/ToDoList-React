import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

interface ChangeStatusProps {
    onChangeStatus: (status: number, id: string) => void;
    todoId: string;
}

const ChangeStatus = ({ onChangeStatus, todoId }: ChangeStatusProps) => {
    return ( 
        <Menu as="div" className="relative inline-block text-left sm:items-end">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-slate px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-300">
          Change Status
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-900" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                  onClick={() => onChangeStatus(1, todoId)}
                >
                  In progress
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                  onClick={() => onChangeStatus(2, todoId)}
                >
                  Done
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
        </Menu>
    )
}

export default ChangeStatus