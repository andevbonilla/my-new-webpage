"use client"
import React, { FormEvent, useState } from 'react'

export const ContactForm = () => {

  const sendEmail = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const messageInfo = {
      name: formData.get('name') ?? '',
      email: formData.get('email') ?? '',
      message: formData.get('message') ?? '',
    }
    if (messageInfo.name === "") {
      return;
    }
    if (messageInfo.email === "") {
      return;
    }
    if (messageInfo.message === "") {
      return;
    }
  }

  return (
    <form onSubmit={sendEmail} className='w-full'> 

        <input type="text" 
               placeholder='Name'
               name='name'
               className='w-full mt-8 py-3 px-4 bg-[#008CFF] text-white'/>

        <input type="text" 
               placeholder='Email'
               name='email'
               className='w-full mt-8 py-3 px-4 bg-[#008CFF] text-white'/>

        <textarea name="message" 
                  id=""
                  rows={"5" as any} 
                  placeholder='Message'
                  className='w-full mt-8 py-3 px-4 bg-[#008CFF] text-white'>
            
        </textarea>

        <button type='submit' className='mt-8 w-full flex items-center justify-center bg-yellow-200 py-4 px-5 text-lg font-bold text-[#0F193B]'>Send</button>

    </form>
  )
}
