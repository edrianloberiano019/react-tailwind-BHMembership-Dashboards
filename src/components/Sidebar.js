import React from "react"
import { HiOutlineUserGroup } from "react-icons/hi"
import { Link } from "react-router-dom"
import { FiSettings } from "react-icons/fi"

const Voters = (props) => {
    return (
        <div className="z-30">
            <div className="flex flex-col flex-auto flex-shrink-0 min-h-screen antialiased text-black bg-white">
                <div className="block sticky top-0 left-64 z-30 items-center h-14 text-white">
                    <div className="flex items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
                        <div class="flex ml-16 transition-all duration-300 md:ml-[16.5rem] items-center p-2 mr-4 w-full max-w-xl bg-white rounded border border-gray-200 shadow-sm">
                            <button class="outline-none focus:outline-none">
                                <svg
                                    class="w-5 h-5 text-gray-600 cursor-pointer"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                            <input
                                type="search"
                                name=""
                                id=""
                                placeholder="Search"
                                class="pl-3 w-full text-sm text-black bg-transparent outline-none focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="block fixed top-0 left-0 z-40 flex-row w-14 h-full text-white bg-blue-900 border-none transition-all duration-300 hover:w-64 md:w-64 sidebar">
                        <div className="overflow-y-auto overflow-x-hidden flex-col flex-grow h-screen">
                            <ul className="flex flex-col py-14 pl-2 space-y-1 h-5/6">
                                <li>
                                    <Link
                                        to="/dashboard"
                                        class="flex relative flex-row items-center h-11 border-transparent focus:outline-none hover:bg-blue-800"
                                    >
                                        <span class="inline-flex justify-center items-center ml-5">
                                            <svg
                                                class="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span class="ml-2 text-sm tracking-wide truncate">Home</span>
                                    </Link>
                                </li>
                                <li className="inline-block w-full group">
                                    <div className="">
                                        <button className="flex px-0 pt-3 pb-2 w-full rounded-none border-solid hover:bg-blue-800 hover:text-white">
                                            <span classNames=" inline-flex justify-center items-center ml-4 text-2xl md:hidden">
                                                <HiOutlineUserGroup className="ml-5 text-xl" />
                                            </span>
                                            <span className="px-2 text-sm tracking-wide text-white sm:block truncate">
                                                Members Management
                                            </span>
                                            <span>
                                                <svg
                                                    className=" md:block hidden my-1 flex-col content-center w-4 h-4 justify-center items=-center transition duration-150 ease-in-out transform fill-current group-hover:-rotate-180"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="block bg-blue-200 transition duration-75 ease-linear transform origin-top scale-0 group-hover:scale-100 min-w-32">
                                        <li className="py-2">
                                            <Link
                                                to="/dashboard/TotalManagement"
                                                className="py-1 px-3 my-1 text-lg font-semibold text-black rounded-sm transition-all duration-500 hover:ml-5"
                                            >
                                                Total Members
                                            </Link>
                                        </li>
                                        <li className="py-2">
                                            <Link
                                                to="/dashboard/page2"
                                                className="py-1 px-3 my-1 text-lg font-semibold text-black rounded-sm transition-all duration-500 hover:ml-5"
                                            >
                                                DevOps
                                            </Link>
                                        </li>
                                    </div>
                                </li>
                            </ul>

                            <div className="flex right-0 justify-end content-end items-end  border-b-[1px] border-blue-700 border-solid">
                                <button className="bottom-0 content-end items-end p-1 m-2 text-xl transition-all duration-700 ease-in-out hover:transform hover:rotate-180">
                                    <Link to="/dashboard/Settings">
                                        <FiSettings />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Voters
