import React from "react"

const TotalManagement = () => {
    return (
        <div className="bg-fixed z-20 bg-gradient-to-t from-[#bb0450] to-blue-600 h-full">
            <div className="flex flex-col ml-16 transition-all duration-300 md:ml-[16.5rem] pt-1">
                <div className="justify-center my-2 text-xl font-semibold text-center text-white uppercase">
                    Totals Members
                </div>
                <div class="grid grid-cols-1 gap-4 p-4 w-full sm:grid-cols-2 lg:grid-cols-4">
                    <div class="flex justify-between items-center p-3 font-medium text-white bg-blue-500 rounded-md border-b-4 border-blue-600 shadow-lg">
                        <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg
                                width="30"
                                height="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                class="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                ></path>
                            </svg>
                        </div>
                        <div class="text-right">
                            <p class="text-2xl">162,257</p>
                            <p>Members</p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center p-3 font-medium text-white bg-blue-500 rounded-md border-b-4 border-blue-600 shadow-lg dark:bg-gray-800 dark:border-gray-600 group">
                        <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg
                                width="30"
                                height="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                class="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                ></path>
                            </svg>
                        </div>
                        <div class="text-right">
                            <p class="text-2xl">361,781</p>
                            <p>Pending</p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center p-3 font-medium text-white bg-blue-500 rounded-md border-b-4 border-blue-600 shadow-lg dark:bg-gray-800 dark:border-gray-600 group">
                        <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg
                                width="30"
                                height="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                class="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current dark:text-gray-800"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                ></path>
                            </svg>
                        </div>
                        <div class="text-right">
                            <p class="text-2xl">₱162,257</p>
                            <p>Paid</p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center p-3 font-medium text-white bg-blue-500 rounded-md border-b-4 border-blue-600 shadow-lg dark:bg-gray-800 dark:border-gray-600 group">
                        <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg
                                width="30"
                                height="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                class="text-blue-800 transition-transform duration-500 ease-in-out transform stroke-current dark:text-gray-800"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </div>
                        <div class="text-right">
                            <p class="text-2xl">₱1.8M</p>
                            <p>Balances</p>
                        </div>
                    </div>
                </div>

                <div></div>
                <div></div>

                <div class="p-2">
                    <div class="sm:block relative flex-col mb-4 min-w-0 break-words bg-[#ffffff98] rounded shadow-lg lg:mb-0 dark:bg-gray-800">
                        <div class="px-0 mb-0 rounded-t border-0">
                            <div class="flex flex-wrap items-center py-2 px-4">
                                <div class="relative flex-1 flex-grow w-full max-w-full">
                                    <h3 class="text-base font-semibold text-gray-900 dark:text-gray-50">
                                        Unpaid Traffic
                                    </h3>
                                </div>
                                <div class="relative flex-1 flex-grow w-full max-w-full text-right">
                                    <button
                                        class="py-1 px-3 mr-1 mb-1 text-xs font-bold text-white uppercase bg-blue-500 rounded transition-all duration-150 ease-linear outline-none dark:bg-gray-100 active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 focus:outline-none"
                                        type="button"
                                    >
                                        See all
                                    </button>
                                </div>
                            </div>
                            <div class="block overflow-x-auto w-full">
                                <table class="items-center w-full bg-transparent border-collapse">
                                    <thead>
                                        <tr>
                                            <th class="py-3 px-2 text-xs font-semibold text-left text-gray-500 uppercase align-middle whitespace-nowrap bg-transparent border-t-[1px] border-b-[1px] border-solid border-[#ffffff3a]">
                                                Places/ Country
                                            </th>
                                            <th class="py-3 pr-2 text-xs font-semibold text-left text-gray-500 uppercase align-middle whitespace-nowrap bg-transparent border-t-[1px] border-b-[1px] border-solid border-[#ffffff3a]">
                                                Pendings
                                            </th>
                                            <th class="py-3 px-4 text-xs font-semibold text-left text-gray-500 uppercase align-middle whitespace-nowrap bg-transparent border-t-[1px] border-b-[1px] border-solid border-[#ffffff3a]"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="text-gray-700 dark:text-gray-100">
                                            <th class="p-4 px-4 text-xs text-left border-b-[1px] border-solid border-[#ffffff3a] align-middle whitespace-nowrap">
                                                Quezon city
                                            </th>
                                            <td class="p-4 border-b-[1px] border-solid border-[#ffffff3a] px-4 text-xs align-middle whitespace-nowrap">
                                                5,480
                                            </td>
                                            <td class="p-4 px-4 border-b-[1px] border-solid border-[#ffffff3a] text-xs align-middle whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <span class="mr-2">70%</span>
                                                    <div class="relative w-full">
                                                        <div class="flex overflow-hidden h-2 text-xs bg-blue-200 rounded">
                                                            <div class="flex w-[70%] flex-col justify-center text-center text-white whitespace-nowrap bg-blue-600 shadow-none"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="text-gray-700 dark:text-gray-100">
                                            <th class="p-4 border-b-[1px] border-solid border-[#ffffff3a] px-4 text-xs text-left align-middle whitespace-nowrap">
                                                Caloocan city
                                            </th>
                                            <td class="p-4 border-b-[1px] border-solid border-[#ffffff3a] px-4 text-xs align-middle whitespace-nowrap">
                                                3,380
                                            </td>
                                            <td class="p-4 border-b-[1px] border-solid border-[#ffffff3a] px-4 text-xs align-middle whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <span class="mr-2">40%</span>
                                                    <div class="relative w-full">
                                                        <div class="flex overflow-hidden h-2 text-xs bg-blue-200 rounded">
                                                            <div class="flex w-[40%] flex-col justify-center text-center text-white whitespace-nowrap bg-blue-500 shadow-none"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="text-gray-700 dark:text-gray-100">
                                            <th class="p-4 px-4 border-b-[1px] border-solid border-[#ffffff3a] text-xs text-left align-middle whitespace-nowrap">
                                                New york city
                                            </th>
                                            <td class="p-4 border-b-[1px] border-solid border-[#ffffff3a] px-4 text-xs align-middle whitespace-nowrap ">
                                                4,105
                                            </td>
                                            <td class="p-4 border-b-[1px] border-solid border-[#ffffff3a] px-4 text-xs align-middle whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <span class="mr-2">45%</span>
                                                    <div class="relative w-full">
                                                        <div class="flex overflow-hidden h-2 text-xs bg-pink-200 rounded">
                                                            <div class="flex w-[45%] flex-col justify-center text-center text-white whitespace-nowrap bg-pink-500 shadow-none"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="text-gray-700 dark:text-gray-100">
                                            <th class="p-4 px-4 text-xs text-left align-middle whitespace-nowrap bg-transparent border-b-[1px] border-solid border-[#ffffff3a]">
                                                Singapore City
                                            </th>
                                            <td class="p-4 px-4 text-xs align-middle whitespace-nowrap bg-transparent border-b-[1px] border-solid border-[#ffffff3a]">
                                                4,985
                                            </td>
                                            <td class="p-4 px-4 text-xs align-middle whitespace-nowrap bg-transparent border-b-[1px] border-solid border-[#ffffff3a]">
                                                <div class="flex items-center">
                                                    <span class="mr-2">60%</span>
                                                    <div class="relative w-full">
                                                        <div class="flex overflow-hidden h-2 text-xs bg-red-200 rounded">
                                                            <div class="flex w-[60%] flex-col justify-center text-center text-white whitespace-nowrap bg-red-500 shadow-none"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="text-gray-700 dark:text-gray-100">
                                            <th class="p-4 px-4 text-xs text-left align-middle whitespace-nowrap">
                                                China
                                            </th>
                                            <td class="p-4 px-4 text-xs align-middle whitespace-nowrap">2,250</td>
                                            <td class="p-4 px-4 text-xs align-middle whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <span class="mr-2">30%</span>
                                                    <div class="relative w-full">
                                                        <div class="flex overflow-hidden h-2 text-xs bg-blue-200 rounded">
                                                            <div class="flex flex-col w-[30%] justify-center text-center text-white whitespace-nowrap bg-blue-700 shadow-none"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Recent Paid" className="p-2">
                    <div class="flex relative flex-col w-full min-w-0 break-words bg-[#ffffff98] rounded shadow-lg dark:bg-gray-800">
                        <div class="px-0 mb-0 rounded-t border-0">
                            <div class="flex flex-wrap items-center py-2 px-4">
                                <div class="relative flex-1 flex-grow w-full max-w-full">
                                    <h3 class="text-base font-semibold text-gray-900 dark:text-gray-50">Recent Paid</h3>
                                </div>
                                <div class="relative flex-1 flex-grow w-full max-w-full text-right">
                                    <button
                                        class="py-1 px-3 mr-1 mb-1 text-xs font-bold text-white uppercase bg-blue-500 rounded transition-all duration-150 ease-linear outline-none dark:bg-gray-100 active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 focus:outline-none"
                                        type="button"
                                    >
                                        See all
                                    </button>
                                </div>
                            </div>
                            <div class="block w-full">
                                <div class="py-3 px-4 text-xs font-semibold text-left text-gray-500 uppercase align-middle whitespace-nowrap bg-transparent border-t-[1px] border-solid border-[#ffffff3a]">
                                    Today
                                </div>
                                <ul class="my-1">
                                    <li class="flex px-4">
                                        <div class="flex-shrink-0 my-2 mr-3 w-9 h-9 bg-indigo-500 rounded-full">
                                            <svg class="w-9 h-9 text-indigo-50 fill-current" viewBox="0 0 36 36">
                                                <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path>
                                            </svg>
                                        </div>
                                        <div class="flex flex-grow items-center py-2 text-sm text-gray-600 bg-transparent border-b-[1px] border-solid border-[#ffffff3a]">
                                            <div class="flex flex-grow justify-between items-center">
                                                <div class="self-center">
                                                    <strong className="pr-1 text-black">Nick Mark, Sara Smith</strong>
                                                    and 99+ others...
                                                </div>
                                                <div class="flex-shrink-0 ml-2">
                                                    <a
                                                        class="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                                                        href="#0"
                                                    >
                                                        View
                                                        <span>
                                                            <svg
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                class="transition-transform duration-500 ease-in-out transform"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                                    clip-rule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="flex px-4">
                                        <div class="flex-shrink-0 my-2 mr-3 w-9 h-9 bg-red-500 rounded-full">
                                            <svg class="w-9 h-9 text-red-50 fill-current" viewBox="0 0 36 36">
                                                <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z"></path>
                                            </svg>
                                        </div>
                                        <div class="flex flex-grow items-center py-2 text-sm text-gray-600 border-gray-100 dark:text-gray-50">
                                            <div class="flex flex-grow justify-between items-center">
                                                <div class="self-center">
                                                    <strong className="pr-1 text-black">Post Name, Nick Mark</strong>
                                                    and 99+ others...
                                                </div>
                                                <div class="flex-shrink-0 ml-2">
                                                    <a
                                                        class="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                                                        href="#0"
                                                    >
                                                        View
                                                        <span>
                                                            <svg
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                class="transition-transform duration-500 ease-in-out transform"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                                    clip-rule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="py-3 px-4 text-xs font-semibold text-left text-gray-500 uppercase align-middle whitespace-nowrap bg-transparent border-t-[1px] border-solid border-[#ffffff3a]">
                                    Yesterday
                                </div>
                                <ul class="my-1">
                                    <li class="flex px-4">
                                        <div class="flex-shrink-0 my-2 mr-3 w-9 h-9 bg-green-500 rounded-full">
                                            <svg class="w-9 h-9 text-light-blue-50 fill-current" viewBox="0 0 36 36">
                                                <path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z"></path>
                                            </svg>
                                        </div>
                                        <div class="flex flex-grow items-center py-2 text-sm text-gray-600 border-gray-100 dark:text-gray-50">
                                            <div class="flex flex-grow justify-between items-center">
                                                <div class="self-center">
                                                    <strong className="text-black">35.1k+</strong> Members already paid!
                                                </div>
                                                <div class="flex-shrink-0 ml-2">
                                                    <a
                                                        class="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                                                        href="#0"
                                                    >
                                                        View
                                                        <span>
                                                            <svg
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                class="transition-transform duration-500 ease-in-out transform"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                                    clip-rule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalManagement
