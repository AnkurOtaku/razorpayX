import React from 'react'

function Note() {
  return (
    <div className='bg-[#ffffff19] rounded-sm p-3'>
      <span className='bg-yellow-600 p-1 rounded-md text-black text-sm font-mono capitalize mx-2'>Test</span>
      These are test payouts and do not affect the actual balance. They are used only for the purpose of integrating events.
      <a href='/' className='text-blue-500 no-underline'>&nbsp;&nbsp;Learn More</a>
    </div>
  )
}

export default Note