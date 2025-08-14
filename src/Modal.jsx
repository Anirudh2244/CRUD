import React, { useState } from "react";

const Modal = (props) => {
  return props.show ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white min-w-4/5 sm:min-w-1/2 min-h-1/2 rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-bold mb-4 text-black">{props.heading}</h2>

        {props.children}

        {/* <div className="flex justify-end mt-6 gap-2">
          <button
            onClick={() => props.onClose()}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Close
          </button>
          <button
            onClick={() => props.onSubmitClick()}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div> */}
      </div>
    </div>
  ) : null;
};

export default Modal;
