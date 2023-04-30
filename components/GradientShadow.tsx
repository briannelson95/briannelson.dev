import React from 'react'

export default function GradientShadow({children}: {children: React.ReactNode}) {
  return (
    <div className='
        relative w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-1 rounded-md
        before:-z-10 before:absolute before:blur-sm before:md:blur opacity-70 before:top-0 before:right-0 before:left-0 before:bottom-0 before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-indigo-500 
        after:-z-10 after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:bg-inherit
    '>
        <div className='flex flex-col h-32 w-full items-center justify-between pt-5 pb-2 bg-gray-800 rounded-sm'>
            {children ? children : "Test"}
        </div>
    </div>
  )
}
