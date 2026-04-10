import React from 'react'

export default function Container({children,className}) {
  return (
    <div className={`lg:w-292.5 px-3 lg:px-0 mx-auto ${className}`}>
        {children}
    </div>
  )
}
