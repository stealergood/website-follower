import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { PaymentSuccess, PaymentFailed } from "../components/utils/importhandle";

async function fetchData(orderId) {
  const parameter = {
    order_id: orderId
  };

  const payload = await fetch("https://backend-follower-f8a6bb63a58e.herokuapp.com/api/v1/payment/status", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parameter),
  });

  const response = await payload.json();
  return response.result.status_message;
}

export default function PaymentStatus({ theme, handleToggle }) {
  PaymentStatus.propTypes = {
    theme: PropTypes.string.isRequired,
    handleToggle: PropTypes.func.isRequired,
  };

  const [statusMessage, setStatusMessage] = useState(null);

  useEffect(() => {
    const orderId = Cookies.get("order_id");
    console.log(orderId);
    fetchData(orderId)
      .then((message) => setStatusMessage(message))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setStatusMessage("Error");
      });
  }, []);

  if (statusMessage === "Transaction doesn't exist.") {
    return (
      <div className={`${theme === "light" ? "bg-slate-100" : "bg-gray-800"}`}>
        <Navbar theme={theme} handleToggle={handleToggle} />
        <div className={`w-full h-screen ${theme === "light" ? "bg-slate-200" : "bg-gray-600"} flex justify-center items-center`}>
          <PaymentFailed theme={theme} />
        </div>
        <Footer theme={theme} />
      </div>
    );
  } else if (statusMessage === "Success, transaction is found") {
    return (
      <div className={`${theme === "light" ? "bg-slate-100" : "bg-gray-800"}`}>
        <Navbar theme={theme} handleToggle={handleToggle} />
        <div className={`w-full h-screen ${theme === "light" ? "bg-slate-200" : "bg-gray-600"} flex justify-center items-center`}>
          <PaymentSuccess theme={theme} />
        </div>
        <Footer theme={theme} />
      </div>
    );
  }

  // Handle other cases or loading state
  return (
    <div>
      Loading...
    </div>
  );
}