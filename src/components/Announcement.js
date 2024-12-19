import React from 'react'

function Announcement() {

  const today = new Date();

  const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <p className="font-serif text-md sm:text-lg font-bold mt-2"><span className="text-red-500">Warning:</span> Enrollment closes on { day[today.getDay()] }, { today.getMonth() + 1 }/{ today.getDate() }/{ today.getFullYear() } at midnight.</p>
  )
}

export default Announcement