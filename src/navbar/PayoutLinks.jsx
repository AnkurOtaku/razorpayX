import React from "react";

function PayoutLinks() {
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
          <path d="M2.002 9.538c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.645a.997.997 0 0 0-.686.893z"></path>
        </svg>
      </div>
      <div className="mx-4 font-bold text-2xl">Payout Links</div>
    </div>
  );
}

export default PayoutLinks;
