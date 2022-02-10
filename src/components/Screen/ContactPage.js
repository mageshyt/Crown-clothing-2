import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { withRouter } from "react-router-dom";

const ContactPage = ({ history }) => {
  // const notify = () => toast.success("Successfully toasted!");
  return (
    <div className="h-screen center">
      {/* {toast(() => (
        <div className="flex  items-center space-x-3">
          <span className="font-semibold">You have to sign in first</span>
          <button
            className="p-2 bg-purple-500 text-white rounded-lg font-bold"
            onClick={() => history.push("/signin")}
          >
            sign In
          </button>
        </div>
      ))}
      <Toaster /> */}
    </div>
  );
};

export default withRouter(ContactPage);
