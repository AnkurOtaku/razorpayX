import React from 'react'

function NeedHelp() {
  return (
    <div className='fixed flex bottom-8 right-8 rounded-full bg-purple-400 p-2'>
      <img src={`${process.env.PUBLIC_URL}/razorpayX-logo-black.png`} alt='razorpayX' className='rounded-full bg-purple-200 w-7 h-7'/>
      <div className='px-2'>Need Help?</div>
    </div>
  )
}

export default NeedHelp