import React from "react";
import PropTypes from "prop-types";

export default function PaymentFailed({ theme }) {
  PaymentFailed.propTypes = {
    theme: PropTypes.string.isRequired,
  };
  return (
    <div className="w-96 h-96 shadow-lg rounded-xl bg-white flex-col">
      <div className="w-full h-48 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff0000" className="w-28 h-28">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="w-full h-28 flex flex-col items-center">
        <p className="text-2xl text-red-500 font-semibold">Payment Failed!!</p>
        <p className="text-sm text-red-500">Harap Periksa Kembali Pembayaran Anda</p>
      </div>
      <div className="w-full h-16 flex justify-center">
        <button className={`${theme === "light" ? "bg-navlight" : "bg-navdark"} w-36 h-12 rounded-lg text-white font-semibold`}>Check Order</button>
      </div>
    </div>
  );
}
