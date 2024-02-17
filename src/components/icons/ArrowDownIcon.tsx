import React, { FC } from 'react'

interface ArrowDownIcon {
  width?: number
  height?: number
  fill?: string
  className?: string
}

const ArrowDownIcon: FC<ArrowDownIcon> = ({ width, height, fill, className }) => {
  return (
    <svg
      width={width || 14}
      height={height || 9}
      fill='none'
      className={className}
      viewBox='0 0 14 9'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.5 1.83398L7 8.33398L0.5 1.83398L2.01667 0.317319L7 5.30065L11.9833 0.317319L13.5 1.83398Z'
        fill={fill || '#38499A'}
      />
    </svg>
  )
}

export default ArrowDownIcon
