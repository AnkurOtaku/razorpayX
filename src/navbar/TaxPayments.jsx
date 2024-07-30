import React from "react";

function TaxPayments() {
  return (
    <div className="p-6 flex items-center h-fit">
      <div className="p-2 bg-[#ffffff2d] rounded">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 22h14"></path>
          <path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"></path>
          <path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"></path>
        </svg>
      </div>
      <div className="mx-4 font-bold text-2xl">Tax Payments</div>
    </div>
  );
}

export default TaxPayments;
