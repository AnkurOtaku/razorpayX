import React from "react";

function AccountStatement() {
  return (
    <div className="p-6 flex items-center h-fit">
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
          <path
            fill="none"
            strokeWidth="2"
            d="M6,16 L16,16 L6,16 L6,16 Z M6,12 L18,12 L6,12 L6,12 Z M6,8 L11,8 L6,8 L6,8 Z M14,1 L14,8 L21,8 M3,23 L3,1 L15,1 L21,7 L21,23 L3,23 Z"
          ></path>
        </svg>
      </div>
      <div className="mx-4 font-bold text-2xl">Account Statement</div>
    </div>
  );
}

export default AccountStatement;
