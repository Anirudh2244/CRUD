import React, { useState } from "react";

const Modal = (props) => {
  return props.show ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white w-[400px] h-[300px] rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-bold mb-4 text-black">{props.heading}</h2>

        {props.children}

        <div className="flex justify-end mt-6">
          <button
            onClick={() => props.onClose()}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
