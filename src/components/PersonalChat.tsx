"use client"
import React, { useState } from "react";
import PinIcon from "./icons/PinIcon";
import ArrowDownIcon from "./icons/ArrowDownIcon";

export default React.memo(function({onClick}: {onClick: (id: string) => void}) {
  const [isFocus, setIsFocus] = useState(false)
  return <div onClick={() => onClick("chat-id")} onMouseEnter={() => setIsFocus(true)} onMouseLeave={() => setIsFocus(false)} className="flex items-center px-4 space-x-2 bg-[#fff] hover:bg-[#d1d1d1] cursor-pointer">
    <div className="py-2">
      <img src="https://pps.whatsapp.net/v/t61.24694-24/399613093_377345948024581_269404153714835111_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AdSVFFnq79IXZClbN7p_8MswSoKYKPmYp03YmHwgIPlqTA&amp;oe=65DCB0F5&amp;_nc_sid=e6ed6c&amp;_nc_cat=108" 
    className="w-[49px] h-[49px] rounded-full"></img>
    </div>
    <div className="border-b-[1px] border-[#d4d4d4] w-[calc(100%-57px)] h-[100%] flex items-start justify-between">
      <div className="flex flex-col">
        <span className="text-[17px] color-[#111B21]">+6282212398123</span>
        <span className="text-[14px] color-[#667781]">Ker naon maneh euy</span>
      </div>
      <div className="w-full h-[100%] flex flex-col space-y-2">
        <span className="text-[12px] color-[#667781] self-end">Yesterday</span>
        <div className="flex self-end space-x-2">
          <button>
            <PinIcon />
          </button>
          { isFocus
            ? <button>
                <ArrowDownIcon />
              </button> : null
          }
        </div>
      </div>
    </div>
  </div>
})