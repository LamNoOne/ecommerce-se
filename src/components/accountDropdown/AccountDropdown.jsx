import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import LogoutIcon from "../icon/LogoutIcon"
import OrderIcon from "../icon/OrderIcon"
import ReviewIcon from "../icon/ReviewIcon"
import UserLightIcon from "../icon/UserLightIcon"
import UserLoginIcon from "../icon/UserLoginIcon"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

export default function AccountDropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-full bg-transparent text-sm font-semibold text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <UserLoginIcon />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[rgba(0,0,0,0.4)] backdrop-filter backdrop-blur-[75px] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-5">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active
                                            ? "bg-[rgba(0,0,0,0.3)] text-gray-300"
                                            : "text-gray-100",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    <div className="flex items-center">
                                        <div className="me-2 ms-0">
                                        <UserLightIcon />
                                        </div>
                                        <span>Account settings</span>
                                    </div>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active
                                            ? "bg-[rgba(0,0,0,0.3)] text-gray-300"
                                            : "text-gray-100",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    <div className="flex items-center">
                                        <div className="me-4 ms-1">

                                        <OrderIcon />
                                        </div>
                                        <span>My Order</span>
                                    </div>
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active
                                            ? "bg-[rgba(0,0,0,0.3)] text-gray-300"
                                            : "text-gray-100",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    <div className="flex items-center">
                                        <div className="me-4 ms-0"><ReviewIcon /></div>
                                        <span>My Reviews</span>
                                    </div>
                                </a>
                            )}
                        </Menu.Item>

                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active
                                                ? "bg-[rgba(0,0,0,0.3)] text-gray-300"
                                                : "text-gray-100",
                                            "block w-full px-4 py-2 text-left text-sm"
                                        )}
                                    >
                                        <div className="flex items-center">
                                            <div className="me-4 ms-0"><LogoutIcon /></div>
                                            <span>Logout</span>
                                        </div>
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
