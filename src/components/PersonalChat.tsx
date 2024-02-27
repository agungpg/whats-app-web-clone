'use client'
import React, { useState } from 'react'

import ArrowDownIcon from './icons/ArrowDownIcon'
import PinIcon from './icons/PinIcon'

export default React.memo(function ({ onClick }: { onClick: (id: string) => void }) {
  const [isFocus, setIsFocus] = useState(false)
  return (
    <div
      onClick={() => onClick('chat-id')}
      onMouseEnter={() => setIsFocus(true)}
      onMouseLeave={() => setIsFocus(false)}
      className='flex cursor-pointer items-center space-x-2 bg-[#fff] px-4 hover:bg-[#d1d1d1]'
    >
      <div className='py-2'>
        <img
          src='https://mdisharedstoragedev.blob.core.windows.net/d-greenbox/order-documents/0803d239-ab93-4d87-8b09-b9f646a36198.png?sv=2023-11-03&se=2024-03-05T07%3A12%3A29Z&sr=b&sp=r&sig=bRhepAW74q2TCPdSLhFoGM7KDPcFMY2lhH8Q08XXYjY%3D'
          className='size-[49px] rounded-full'
        />
      </div>
      <div className='flex h-[100%] w-[calc(100%-57px)] items-start justify-between border-b-[1px] border-[#d4d4d4]'>
        <div className='flex flex-col'>
          <span className='color-[#111B21] text-[17px]'>+6282212398123</span>
          <span className='color-[#667781] text-[14px]'>Ker naon maneh euy</span>
        </div>
        <div className='flex h-[100%] w-full flex-col space-y-2'>
          <span className='color-[#667781] self-end text-[12px]'>Yesterday</span>
          <div className='flex space-x-2 self-end'>
            <button>
              <PinIcon />
            </button>
            {isFocus ? (
              <button>
                <ArrowDownIcon />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
})
