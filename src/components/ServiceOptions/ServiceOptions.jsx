import React, { useState } from "react";

export default function ServiceOptions() {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
       

        <div className="relative w-full">
          <select
            id="service-select"
            value={selectedService}
            onChange={handleServiceChange}
            className="w-full h-14 px-4 py-3 text-sm text-[#737373] border border-[#E5E5E5] rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="move_in">Move-In Concierge</option>
            <option value="move_out">Move-Out Concierge</option>
            <option value="assembly">Furniture Assembly</option>
            <option value="addons">Add-ons</option>
          </select>

          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
