import React from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactPage = () => {
  const notify = () => toast.success("Successfully toasted!");
  return (
    <div className="h-screen center">
      <button className="text-3xl font-bold" onClick={notify}>
        Make me a toast
      </button>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ContactPage;
