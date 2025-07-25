import React, { useState } from "react";

export default function ServiceOptions() {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <div className="rounded-lg shadow-lg">
      <div className="xl:w-[400px] w-full flex-col flex gap-[8px]">
        <div className="relative">
          <select
            id="service-select"
            className="w-full lg:py-[16px] lg:px-[20px] border border-[#E5E5E5] rounded-[12px] text-[#737373] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            value={selectedService}
            onChange={handleServiceChange}
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="web_development">Move-In Concierge</option>
            <option value="mobile_app_development">Move-Out Concierge</option>
            <option value="ui_ux_design">Furniture Assembly</option>
            <option value="digital_marketing">Add-ons</option>
          </select>

          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-[20px] flex items-center">
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

        {/* Display selected service */}
       
      </div>
    </div>
  );
}
