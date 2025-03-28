"use client"

import { SavingActions } from "@/data/data";
import React from "react";

const CostSavingActions = () => {
   

  return (
    <>
    <div className="w-full md:w-3/4 bg-[var(--card)] rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-medium mb-4 text-[var(--textHover)]">Cost Saving Actions</h2>

          <div className="flex flex-col  gap-4">
            {SavingActions.map((Saction) => (
              <div key={Saction.id} className="flex justify-between p-1">
              <label  className="flex items-baseline justify-between gap-2">
                <input
                  type="checkbox"
                  className="accent-[var(--textHover)]"
                />
                <span >{Saction.option}</span>
                </label>
                <div className="flex flex-wrap p-1 w-96 gap-2 ">

                {
                  Saction.nextOptions.map((nextoption , index)=>{
                    return <label key={index} className="flex items-baseline gap-1">
                    <input
                      type="checkbox"
                      className="accent-[var(--textHover)]"
                    />
                    <span>{nextoption}</span>
                    </label>
                  })
                }
                </div>
              </div>

            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            <button className="text-[var(--textHover)] bg-[var(--background)] px-6 py-2 rounded-lg hover:bg-[var(--textHover)] hover:text-[var(--background)] transition">
              Back
            </button>
            <button className="text-[var(--textHover)] bg-[var(--background)] px-6 py-2 rounded-lg hover:bg-[var(--textHover)] hover:text-[var(--background)] transition">
              Next
            </button>
          </div>
        </div>

    </>
  )
}

export default CostSavingActions
