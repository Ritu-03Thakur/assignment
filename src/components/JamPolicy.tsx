"use client"

import { JamPolicyData } from '@/data/data';
import React, { useState } from 'react'
import { FaCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const JamPolicy = () => {
    const [copy , setCopy] = useState(false) ; 

    const handleCopy = () => {
        setCopy(true);
        setTimeout(()=>{
          setCopy(false)
        } , 2000)
    }

  return (
    <>
    <div className="w-full md:w-1/4 bg-[var(--card)] rounded-lg shadow-lg p-6 relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[var(--textHover)]">JAM Policy</h2>
            <span onClick={handleCopy}>
                {
                    copy ? <FaCheck className="w-5 h-5 cursor-pointer text-[var(--textHover)] " /> : <FaCopy className="w-5 h-5 cursor-pointer hover:text-[var(--textHover)]" />
                }
            </span>
          </div>

          <div className="overflow-y-auto max-h-[400px] pr-4">
    <div>
       <div className='flex flex-col p-1 gap-1'>
        {
            JamPolicyData.map((data)=>
              (
             <p key={data.id} 
             className=' max-w-96 text-sm  p-2'
             >
                {data.policy}
             </p>
              ))
        }
       </div>
    </div>
          </div>
        </div>
    </>
  )
}

export default JamPolicy
