"use client"
import React, { FormEvent, useState } from 'react'

export const ContactForm = () => {

  const [nameError, setNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [messageError, setMessageError] = useState("")

  const sendEmail = (e:FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const messageInfo = {
      name: formData.get('name') ? formData.get("name") :'',
      email: formData.get('email') ? formData.get("email") :'',
      message: formData.get('message') ? formData.get("message") :'',
    }
    console.log(messageInfo);

    if (messageInfo.name?.toString() === "") {
      setNameError("The Name is required.");
    }else{
      setNameError("");
    }

    if (messageInfo.email?.toString() === "") {
      setEmailError("The Email is required.");
    }else{
      setEmailError("");
    }

    if (messageInfo.message?.toString() && (messageInfo.message?.toString() === "" || messageInfo.message?.toString().length < 10)) {
      setMessageError("The Message must have at least 10 chracters.");
    }else{
      setMessageError("");
    }

    if ((nameError === "") || (emailError === "") || (messageError === "")) {
      return;
    }

  }

  return (
    <form onSubmit={sendEmail} className='w-full'> 

        <div>

            <input type="text" 
                  placeholder='Name'
                  name='name'
                  className={`${(nameError !== "") ? "border-2 border-red-500" : ""} w-full mt-8 py-3 px-4 bg-[#008CFF] text-white`}
            />

            {nameError && <p className='text-red-500 text-lg'>{nameError}</p>}

        </div>
        

        <div>

            <input type="text" 
                  placeholder='Name'
                  name='email'
                  className={`${(emailError !== "") ? "border-2 border-red-500" : ""} w-full mt-8 py-3 px-4 bg-[#008CFF] text-white`}
            />

            {emailError && <p className='text-red-500 text-lg'>{emailError}</p>}

        </div>

        <div>

          <textarea name="message" 
                    rows={"5" as any} 
                    placeholder='Message'
                    className={`${(emailError !== "") ? "border-2 border-red-500" : ""} w-full mt-8 py-3 px-4 bg-[#008CFF] text-white`}>
              
          </textarea>

          {messageError && <p className='text-red-500 text-lg'>{messageError}</p>}

        </div>

        <button type='submit' className='mt-8 w-full flex items-center justify-center bg-yellow-200 py-4 px-5 text-lg font-bold text-[#0F193B]'>Send</button>

    </form>
  )
}
