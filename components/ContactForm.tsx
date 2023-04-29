"use client"

import { sendContactForm } from "@/lib/api";
import React, { useState } from "react";

const initValues = {
    name: "",
    email: "",
    message: ""
}

const initState = {values: initValues}

export default function ContactForm() {
    const [state, setState] = useState(initState)
    const { values } = state

    const handleChange =({target}: any) => setState((prev: any) => ({
        ...prev, 
        values: {
            ...prev.values,
            [target.name]: target.value
        }
    }));

    const onSubmit = async () => {
        setState((prev: any) => ({
            ...prev,
            isLoading: true
        }));

        try {
            await sendContactForm(values)
        } catch (error) {
            setState((prev: any) => ({
                ...prev,
                isLoading: false,
                error
            }));
        }
    }

    return (
        <>
            <form className='flex flex-col p-8'>
                <h1 className='text-2xl font-bold'>Send a message</h1>

                <label htmlFor='fullname' className='font-light mt-8'>
                    Full Name<span className='text-red-500'>*</span>
                </label>
                <input
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                    required
                    className='border-b py-2 pl-4 bg-transparent'
                />

                <label htmlFor='email' className='font-light mt-8'>
                    Email<span className='text-red-500'>*</span>
                </label>
                <input
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    required
                    className='border-b py-2 pl-4 bg-transparent'
                />

                <label htmlFor='message' className='font-light mt-8'>
                    Message<span className='text-red-500'>*</span>
                </label>
                <textarea
                    value={values.message}
                    onChange={handleChange}
                    name="message"
                    required
                    className='border-b py-2 pl-4 bg-transparent'
                />

                <div className="flex flex-row items-center justify-start">
                    <button
                        disabled={!values.name || !values.email || !values.message}
                        type="submit"
                        onClick={onSubmit}
                        className="px-10 mt-8 py-2 bg-black text-white font-light rounded-md text-lg flex flex-row items-center disabled:opacity-75"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}