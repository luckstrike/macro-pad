import React, { useState, useEffect } from 'react'

// Get the current time and updates it every second

export const GetTime = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    let timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  })

  return (
    <div>
      {time.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
      })}
    </div>
  )
}

export default GetTime
