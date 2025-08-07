import React from "react";

export default function () {
  return (
    <nav className="flex items-center justify-between w-full shadow-md gap-4 px-4 py-2">
      {/* Logo Section */}
      <div className="text-l sm:text-2xl font-bold px-4 py-2">
        ZorShour
      </div>

      <div className="flex items-center gap-4 max-w-full overflow-hidden">
        {/* Search bar */}
        <div className="flex-initial w-96">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* New Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          New
        </button>
      </div>
    </nav>
  );
}
