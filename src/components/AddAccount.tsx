"use client";
import { useState } from "react";
import JamPolicy from "./JamPolicy";
import { SelectOptions } from "@/data/data";
import CostSavingActions from "./CostSavingActions";

const AddAccount = () => {
  const [activeTab, setActiveTab] = useState("Select Actions");

  return (
    <div className="flex flex-col min-h-screen p-6 ">
      <div className="flex justify-start gap-4 border-b mb-4">
        {SelectOptions.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-[18px] font-medium ${
              activeTab === tab.id
                ? "border-b-2 border-[#A55B4B] text-[#DCA06D] "
                : " hover:text-[#DCA06D]"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.option}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <CostSavingActions />

        <JamPolicy />
      </div>
    </div>
  );
};

export default AddAccount;
