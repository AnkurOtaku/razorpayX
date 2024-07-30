import React, { useEffect, useState, useRef } from "react";

import { HiMiniCheckCircle } from "react-icons/hi2";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { AiFillNotification } from "react-icons/ai";
import { BsPersonCheckFill } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";

import Note from "../components/Note";
import payoutsData from "../components/payout.json";
import NeedHelp from "../components/NeedHelp";

function Payouts() {
  const [head_button, setHead_button] = useState(1);
  const [filter_button, setFilter_button] = useState(1);

  const [isPayoutOpen, setIsPayoutOpen] = useState(false);
  const [isPayout2Open, setIsPayout2Open] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isPageOpen, setIsPageOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useState("");
  const [pageValue, setPageValue] = useState(5);
  const dropdownRef = useRef(null);
  const dropdownPageRef = useRef(null);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsSortOpen(false);
  };
  const handleSelectPage = (value) => {
    setPageValue(value);
    setIsPageOpen(false);
  };

  // dropdown toggle functions
  const togglePayoutDropdown = () => {
    setIsPayoutOpen(!isPayoutOpen);
  };
  const togglePayout2Dropdown = () => {
    setIsPayout2Open(!isPayout2Open);
  };
  const toggleFilterDropdown = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const toggleSortDropdown = () => {
    setIsSortOpen(!isSortOpen);
  };
  const togglePageDropdown = () => {
    setIsPageOpen(!isPageOpen);
  };

  // data filter process
  const [filteredPayouts, setFilteredPayouts] = useState([]);

  const filter_payouts = (payoutsData, filter_method) => {
    let temp = [];
    switch (filter_method) {
      case 1:
        temp = payoutsData.sort((a, b) => b.amount - a.amount);
        setFilteredPayouts(temp);
        break;
      case 2:
        temp = payoutsData.sort((a, b) => a.amount - b.amount);
        setFilteredPayouts(temp);
        break;
      case 3:
        temp = payoutsData.filter((payout) => payout.status === "completed");
        setFilteredPayouts(temp);
        break;
      case 4:
        temp = payoutsData.filter((payout) => payout.status === "queued");
        setFilteredPayouts(temp);
        break;
      case 5:
        temp = payoutsData.filter((payout) => payout.status === "failed");
        setFilteredPayouts(temp);
        break;
      case 6:
        temp = payoutsData.slice(0, pageValue);
        setFilteredPayouts(temp);
        break;
      default:
        return temp;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // filter_payouts(payoutsData, 4);
      console.log(filteredPayouts);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      {/* head */}
      <div className="flex justify-between bg-[#080d2a]">
        <div className="flex items-center">
          <div className="m-6 flex items-center">
            <div className="p-2 bg-[#ffffff2d] rounded">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path>
              </svg>
            </div>
            <div className="mx-4 font-bold text-2xl">Payouts</div>
          </div>
          /
          <ul className="flex">
            <li>
              <button
                className={`${
                  head_button === 1 &&
                  `bg-[#173f7e79] rounded-lg font-semibold text-[#478dff]`
                } ml-3 py-1.5 px-3 `}
                onClick={() => {
                  setHead_button(1);
                }}
              >
                Single
              </button>
            </li>
            <li>
              <button
                className={`${
                  head_button === 2 &&
                  `bg-[#173f7e79] rounded-lg font-semibold text-[#478dff]`
                } ml-3 py-1.5 px-3 `}
                onClick={() => {
                  setHead_button(2);
                }}
              >
                Bulk
                <span className=" ml-2 px-2 bg-green-500 rounded-full font-normal text-white">
                  New
                </span>
              </button>
            </li>
            <li>
              <button
                className={`${
                  head_button === 3 &&
                  `bg-[#173f7e79] rounded-lg font-semibold text-[#478dff]`
                } ml-3 py-1.5 px-3 `}
                onClick={() => {
                  setHead_button(3);
                }}
              >
                Tally
              </button>
            </li>
            <li>
              <button
                className={`${
                  head_button === 4 &&
                  `bg-[#173f7e79] rounded-lg font-semibold text-[#478dff]`
                } ml-3 py-1.5 px-3 `}
                onClick={() => {
                  setHead_button(4);
                }}
              >
                Payout Links
              </button>
            </li>
          </ul>
        </div>

        <div className="flex items-center pr-4">
          {/* payout dropdown */}
          <div className="relative inline-block text-left px-2">
            <div>
              <button
                type="button"
                className="inline-flex justify-between items-center w-full px-4 py-2 border border-[#478dff] text-[#478dff] rounded-none focus:outline-none"
                id="menu-button"
                aria-expanded={isPayoutOpen}
                aria-haspopup="true"
                onClick={togglePayoutDropdown}
              >
                + PAYOUT
                <div className="flex items-center">
                  <span className="h-6 border-l border-gray-400 ml-2"></span>
                  <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>

            {isPayoutOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-none shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="/"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    Recent
                  </a>
                  <a
                    href="/"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    Schedule
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="px-2 text-2xl text-blue-400">
            <IoMdSearch />
          </div>
          <div className="px-2 text-2xl text-orange-600 -rotate-45">
            <AiFillNotification />
          </div>
          <div className="px-2 text-2xl text-blue-500">
            <BsPersonCheckFill />
          </div>
        </div>
      </div>

      {/* filter */}
      <div className="flex justify-between bg-[#111739] py-4">
        <div className="flex items-center">
          <div className="mx-6">Quick Filters : </div>
          <button
            className={`${
              filter_button === 1 && `bg-[#1b499379] text-[#478dff]`
            } relative flex items-center justify-center ml-3 py-1.5 px-3 rounded-sm bg-[#142657] bg-opacity-50`}
            onClick={() => {
              setFilter_button(1);
            }}
          >
            <div
              className={`absolute left-0 h-1/3 border-l-2 ${
                filter_button === 1 ? "border-white" : "border-orange-500"
              }`}
            />
            {filter_button === 1 ? (
              <div className="bg-white rounded-full">
                <HiMiniCheckCircle />
              </div>
            ) : (
              <MdRadioButtonUnchecked />
            )}
            &nbsp;&nbsp; All Payouts
          </button>
          <button
            className={`${
              filter_button === 2 && `bg-[#1b499379] text-[#478dff]`
            } relative flex items-center justify-center ml-3 py-1.5 px-3 rounded-sm bg-[#142657] bg-opacity-50`}
            onClick={() => {
              setFilter_button(2);
            }}
          >
            <div
              className={`absolute left-0 h-1/3 border-l-2 ${
                filter_button === 2 ? "border-white" : "border-orange-500"
              }`}
            />
            {filter_button === 2 ? (
              <div className="bg-white rounded-full">
                <HiMiniCheckCircle />
              </div>
            ) : (
              <MdRadioButtonUnchecked />
            )}
            &nbsp;&nbsp; Scheduled for next 2 days
          </button>
          <button
            className={`${
              filter_button === 3 && `bg-[#1b499379] text-[#478dff]`
            } relative flex items-center justify-center ml-3 py-1.5 px-3 rounded-sm bg-[#142657] bg-opacity-50`}
            onClick={() => {
              setFilter_button(3);
            }}
          >
            <div
              className={`absolute left-0 h-1/3 border-l-2 ${
                filter_button === 3 ? "border-white" : "border-orange-500"
              }`}
            />
            {filter_button === 3 ? (
              <div className="bg-white rounded-full">
                <HiMiniCheckCircle />
              </div>
            ) : (
              <MdRadioButtonUnchecked />
            )}
            &nbsp;&nbsp; Queued (RazonPayX A/c) 1
          </button>
        </div>
        <div className="flex items-center">
          {/* filter dropdown */}
          <div className="relative inline-block text-left px-2">
            <div>
              <button
                type="button"
                className="inline-flex justify-between items-center w-full px-4 py-2 text-[#478dff]"
                id="menu-button"
                aria-expanded={isFilterOpen}
                aria-haspopup="true"
                onClick={toggleFilterDropdown}
              >
                View More Filters
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>

            {isFilterOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-none shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="/"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    Null
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* data */}
      <div className="py-4 mx-6">
        <Note />
        <div className="flex justify-between">
          <div className="flex items-center">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Showing all payouts</span>
            </label>
            {/* sort dropdown */}
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-blue-400"
                  onClick={toggleSortDropdown}
                >
                  {selectedValue ? `Sort by ${selectedValue}` : "Only Queued"}
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </div>

              {isSortOpen && (
                <div className="origin-top-left absolute left-0 mt-2 w-full rounded-none shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      role="menuitem"
                      onClick={() => {
                        filter_payouts(payoutsData, 1);
                        handleSelect("Highest to Lowest");
                      }}
                    >
                      Highest to Lowest
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      role="menuitem"
                      onClick={() => {
                        filter_payouts(payoutsData, 2);
                        handleSelect("Lowest To Highest");
                      }}
                    >
                      Lowest to Highest
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      role="menuitem"
                      onClick={() => {
                        filter_payouts(payoutsData, 3);
                        handleSelect("Only Completed");
                      }}
                    >
                      Only Completed
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      role="menuitem"
                      onClick={() => {
                        filter_payouts(payoutsData, 4);
                        handleSelect("Only Queued");
                      }}
                    >
                      Only Queued
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      role="menuitem"
                      onClick={() => {
                        filter_payouts(payoutsData, 5);
                        handleSelect("Only Failed");
                      }}
                    >
                      Only Failed
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center py-4">
            <button
              className="text-2xl px-2 cursor-pointer"
              onClick={() => {
                filter_payouts(payoutsData, 4);
              }}
            >
              <IoMdRefresh />
            </button>
            <div className="text-2xl px-2 cursor-pointer">
              <IoMdMore />
            </div>
            <button className="flex items-center text-[#478dff] border border-[#478dff] p-2">
              <BsDownload />
              &nbsp; Export
            </button>
            {/* payout dropdown */}
            <div className="relative inline-block text-left px-2">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-between items-center w-full px-4 py-2 border border-[#478dff] bg-[#478dff] text-white rounded-none focus:outline-none"
                  id="menu-button"
                  aria-expanded={isPayout2Open}
                  aria-haspopup="true"
                  onClick={togglePayout2Dropdown}
                >
                  + PAYOUT
                  <div className="flex items-center">
                    <span className="h-6 border-l border-gray-400 ml-2"></span>
                    <svg
                      className="w-4 h-4 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </div>

              {isPayout2Open && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-none shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <a
                      href="/"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Recent
                    </a>
                    <a
                      href="/"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                    >
                      Schedule
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="my-4 border-[#484f77] border w-full" />
        {filteredPayouts.length===0 ? (
          <div>Try Refreshing Table</div>
        ) : (
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left *:font-light">
                <th className="py-2 px-4">CREATED AT</th>
                <th className="py-2 px-4">AMOUNT</th>
                <th className="py-2 px-4 text-center">STATUS</th>
                <th className="py-2 px-4">CONTACT</th>
                <th className="py-2 px-4">CREATED BY</th>
                <th className="py-2 px-4">
                  UTR{" "}
                  <button className="text-gray-500">
                    <FaQuestionCircle />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPayouts.map((payout, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">{payout.date}</td>
                  <td className="py-2 px-4">
                    <span className="text-sm text-gray-500">₹</span>
                    {payout.amount}
                    <span className="text-sm text-gray-500">.00</span>
                  </td>
                  <td className="py-2 px-4 capitalize">
                    <div
                      className={`rounded-full text-center xl:w-[80%] ${
                        payout.status === "queued"
                          ? "bg-yellow-900 text-yellow-400"
                          : payout.status === "completed"
                          ? "bg-green-900 text-green-400"
                          : payout.status === "failed"
                          ? "bg-red-800 text-red-300"
                          : ""
                      }`}
                    >
                      {payout.status}
                    </div>
                  </td>
                  <td className="py-2 px-4 break-all">{payout.contact}</td>
                  <td className="py-2 px-4 text-gray-500">
                    {payout.createdby}
                  </td>
                  <td className="py-2 px-4">
                    {payout.UTR ? payout.UTR : "__"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="my-4 border-[#484f77] border w-full" />
      </div>

      {/* pagination */}
      <div
        className="absolute right-4 inline-block text-left"
        ref={dropdownPageRef}
      >
        <div>
          <button
            type="button"
            className="inline-flex justify-center items-center w-full px-4 py-2 text-blue-400"
            onClick={togglePageDropdown}
          >
            {pageValue ? `${pageValue} Rows/Page` : ""}
            <div className="flex items-center">
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>

        {isPageOpen && (
          <div className="origin-bottom-right absolute left-0 mt-2 w-full rounded-none shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
                onClick={() => {
                  handleSelectPage(5);
                  filter_payouts(filteredPayouts, 6);
                }}
              >
                5
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
                onClick={() => {
                  handleSelectPage(10);
                  filter_payouts(filteredPayouts, 6);
                }}
              >
                10
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
                onClick={() => {
                  handleSelectPage(15);
                  filter_payouts(filteredPayouts, 6);
                }}
              >
                15
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
                onClick={() => {
                  handleSelectPage(20);
                  filter_payouts(filteredPayouts, 6);
                }}
              >
                20
              </button>
            </div>
          </div>
        )}
      </div>

      {/* assist */}
      <NeedHelp />
    </div>
  );
}

export default Payouts;
