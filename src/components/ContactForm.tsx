import React from 'react'

export const ContactForm = () => {
  return (
    <form className='w-full'> 

        <input type="text" 
               placeholder='Name'
               className='w-full mt-8 py-3 px-4 bg-[#008CFF] text-white'/>

        <input type="text" 
               placeholder='Email'
               className='w-full mt-8 py-3 px-4 bg-[#008CFF] text-white'/>

        <textarea name="info" 
                  id="" 
                  rows={"10" as any}
                  placeholder='Message'
                  className='w-full mt-8 py-3 px-4 bg-[#008CFF] text-white'>
            
        </textarea>

        <button type='submit' className='mt-8 w-full flex items-center justify-center bg-yellow-200 py-4 px-5 text-lg font-bold text-[#0F193B]'>Send</button>

    </form>
  )
}
