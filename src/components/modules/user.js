import React from 'react'

const user = ({name}) => {
  return (
    <div>
      <span className="text-sm flex h-4 inline-flex mr-2">
        <span className="animate-ping absolute inline-flex h-full rounded-full opacity-75 bg-green-500"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </span>
      { name } is online
    </div>
  )
}

export default user