import React from 'react'

function Loading() {
  return (
    <div className='min-h-screen flex items-center justify-center gap-10'>
    <div className='w-20 h-20 border-4 border-gray-300 border-t-4 border-t-blue-500 rounded-full animate-spin'></div>
    <div className='text-center'>
      <h1 className='text-2xl font-bold'>Loading...</h1>
      <p className='text-gray-500'>Please wait while we fetch the job details.</p>

    </div>
  </div>
  )
}

export default Loading
