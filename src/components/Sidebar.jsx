import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [iconSize, setIconSize] = useState("1.5em");

  const toggleNav = () => {
    isOpen ? setIconSize("1.5em") : setIconSize("1em");
    setIsOpen(!isOpen);
  };

  const navbar = [
    {
      name: "Home",
      link: "Home",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 576 512"
          height={{ iconSize }}
          width={iconSize}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
        </svg>
      ),
      isUpdated: false,
    },
    {
      name: "Payouts",
      link: "Payouts",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height={iconSize}
          width={iconSize}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path>
        </svg>
      ),
      isUpdated: true,
    },
    {
      name: "Account Statement",
      link: "AccountStatement",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height={iconSize}
          width={iconSize}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeWidth="2"
            d="M6,16 L16,16 L6,16 L6,16 Z M6,12 L18,12 L6,12 L6,12 Z M6,8 L11,8 L6,8 L6,8 Z M14,1 L14,8 L21,8 M3,23 L3,1 L15,1 L21,7 L21,23 L3,23 Z"
          ></path>
        </svg>
      ),
      isUpdated: false,
    },
    {
      name: "Contacts",
      link: "Contacts",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="0"
          viewBox="0 0 15 15"
          height={iconSize}
          width={iconSize}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      isUpdated: false,
    },
  ];
  const navbar2 = [
    {
      name: "Vendor Payments",
      link: "VendorPayments",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 256 256"
          height={iconSize}
          width={iconSize}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M216,40H40A16,16,0,0,0,24,56V216a8,8,0,0,0,11.58,7.15L64,208.94l28.42,14.21a8,8,0,0,0,7.16,0L128,208.94l28.42,14.21a8,8,0,0,0,7.16,0L192,208.94l28.42,14.21A8,8,0,0,0,232,216V56A16,16,0,0,0,216,40Zm0,163.06-20.42-10.22a8,8,0,0,0-7.16,0L160,207.06l-28.42-14.22a8,8,0,0,0-7.16,0L96,207.06,67.58,192.84a8,8,0,0,0-7.16,0L40,203.06V56H216ZM136,112a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H144A8,8,0,0,1,136,112Zm0,32a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H144A8,8,0,0,1,136,144ZM64,168h48a8,8,0,0,0,8-8V96a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v64A8,8,0,0,0,64,168Zm8-64h32v48H72Z"></path>
        </svg>
      ),
      isUpdated: false,
    },
    {
      name: "Tax Payments",
      link: "TaxPayments",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height={iconSize}
          width={iconSize}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 22h14"></path>
          <path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"></path>
          <path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"></path>
        </svg>
      ),
      isUpdated: false,
    },
    {
      name: "Payout Links",
      link: "PayoutLinks",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height={iconSize}
          width={iconSize}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.002 9.538c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.645a.997.997 0 0 0-.686.893z"></path>
        </svg>
      ),
      isUpdated: false,
    },
    {
      name: "Payroll",
      link: "Payroll",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height={iconSize}
          width={iconSize}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1023.31 473.28c-1.36-11.312-5.614-21.713-12.095-30.465h.16l-.88-.88c-3.28-4.32-7.12-8.128-11.408-11.504L831.935 262.047V158.783c0-17.68-14.32-32-32-32H698.607l-116.8-99.711c-36.223-36.224-99.504-36.289-135.776 0l-116.4 99.711H223.935c-17.68 0-32 14.32-32 32V264.16L28.815 427.28c-17.343 11.472-28.88 31.088-28.88 53.344v479.504c0 35.184 28.817 64 64 64h896c35.184 0 64-28.816 64-64v-478.24c.224-2.88-.064-5.76-.624-8.607zM268.865 725.503L63.937 915.582V544.686zm61.697 29.999a31.634 31.634 0 0 0 11.377-8.224c1.712-1.935 3.056-4.063 4.224-6.255l137.904-127.936c7.248-5.84 15.84-8.913 24.88-8.913 9.183 0 18.367 3.216 24.527 8l383.84 347.936H110.002zm427.777-25.776l201.6-178.896v361.632zm139.599-313.104h-.976l54.896 55.792-119.92 106.432V350.638zM491.283 72.318c6.064-6.032 14.095-9.376 22.623-9.376 8.56 0 16.592 3.344 22.656 9.376l64.624 54.464H426.754zm276.655 118.464V635.63l-57.312 50.88-136.32-123.568c-37.68-29.536-91.775-30.817-131.68 1.376l-126.624 117.44-60.064-53.008V190.782zM103.777 442.813l88.16-88.129V572.3L75.313 469.404l26.992-26.592h1.472z"></path>
        </svg>
      ),
      isUpdated: false,
    },
    {
      name: "Reports",
      link: "Reports",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height={iconSize}
          width={iconSize}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 96C0 43 43 0 96 0h96V190.7c0 13.4 15.5 20.9 26 12.5L272 160l54 43.2c10.5 8.4 26 .9 26-12.5V0h32 32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32z"></path>
        </svg>
      ),
      isUpdated: false,
    },
  ];

  return (
    <div
      className={`fixed z-10 text-white h-screen inset-0 left-0 top-0 transition-width duration-300 ${
        isOpen ? "w-[17rem]" : "w-20"
      } bg-[#262f67]`}
      onMouseEnter={toggleNav}
      onMouseLeave={toggleNav}
    >
      <div className="flex flex-col items-center pt-4">
        <div className="flex items-center p-4">
          {!isOpen && (
            <img
              src={`${process.env.PUBLIC_URL}/RazorpayX-logo.png`}
              alt="logo"
              className=""
            />
          )}
          {isOpen && (
            <img
              src={`${process.env.PUBLIC_URL}/RazorpayX.png`}
              alt="Logo"
              className=" w-[80%] h-10"
            />
          )}
        </div>
        {navbar.map((item) => (
          <NavLink
            to={`/${item.link}`}
            key={item.name}
            className={({ isActive }) =>
              `flex items-center w-full my-2 py-2 pl-2 relative ${
                isActive
                  ? "font-bold bg-[#424b7a] parent"
                  : "hover:font-bold hover:bg-[#424b7a] parent"
              }`
            }
          >
            <div className={`absolute left-0 h-2/3 border-l-2 child hidden`} />
            {item.icon}
            {isOpen && <span className="px-3 ">{item.name}</span>}
            {isOpen && item.isUpdated && (
              <span className="px-1 bg-green-500 rounded font-semibold">
                New
              </span>
            )}
            {isOpen && (
              <button className="hidden place-content-center p-1 text-2xl absolute right-0 bg-[#818cc6]">
                +
              </button>
            )}
          </NavLink>
        ))}
        <div className="my-4 border-[#484f77] border w-full" />
        {navbar2.map((item) => (
          <NavLink
            to={`/${item.link}`}
            key={item.name}
            className={({ isActive }) =>
              `flex items-center w-full my-2 py-2 pl-2 relative ${
                isActive
                  ? "font-bold bg-[#424b7a] border-l-2 border-orange-400 parent"
                  : "hover:font-bold hover:bg-[#424b7a] hover:border-l-2 border-orange-400 parent"
              }`
            }
          >
            {item.icon}
            {isOpen && <span className="px-3 ">{item.name}</span>}
            {isOpen && item.isUpdated && (
              <span className="px-1 bg-green-500 rounded font-semibold">
                New
              </span>
            )}
            {isOpen && (
              <button className="hidden place-content-center p-1 text-2xl absolute right-0 bg-[#818cc6]">
                +
              </button>
            )}
          </NavLink>
        ))}
        {isOpen && (
          <div className="absolute flex items-center px-2 py-4 bottom-0">
            Get RazorpayX mobile app &nbsp;&nbsp;{" "}
            <a href="https://apps.apple.com/in/app/razorpayx/id1542911810">
              <FaApple />
            </a>
            &nbsp;
            <a href="https://play.google.com/store/search?q=razorpayx&c=apps">
              <IoLogoGooglePlaystore />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
