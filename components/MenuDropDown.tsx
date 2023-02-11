import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Switcher from './Switcher'
import Link from 'next/link'
import supabaseBrowser from '../supabaseConfig/supabase-browser'
import { RiAccountCircleFill } from 'react-icons/ri'


const handleLogout = async () => {
    const { error } = await supabaseBrowser.auth.signOut()

    if (error) {
        console.log({ error })
    }
}

export default function AccountMenuDropDown() {
    return (
        <div className="absolute right-5 top-4">
            <Menu as="div" className="relative inline-block space-y-4 text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white">
                        <RiAccountCircleFill
                            className="ml-2 -mr-1 h-5 w-5 text-zinc-400 hover:text-zinc-100"
                            aria-hidden="true"
                        />
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
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-black shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="p-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href="/profile"
                                        className={`${active ? 'bg-blue-500' : ''
                                            } group flex w-full items-center rounded-md p-2 text-sm text-white`}
                                    >
                                        Account
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={handleLogout}
                                        className={`${active ? 'bg-blue-500' : ''
                                            } group flex w-full items-center rounded-md p-2 text-sm text-white`}
                                    >
                                        Logout
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="p-1 text-center">
                            <Menu.Item>
                                <div className='flex flex-row space-x-5 p-2 text-sm text-white'>
                                    <p>Dark Mode</p>
                                    <div className='absolute right-4 bottom-2'>
                                        <Switcher />
                                    </div>
                                </div>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}