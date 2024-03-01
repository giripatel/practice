import React from 'react';
import Button from '../components/Button'
import Input from '../components/Input'
const Signup = () => {

    return (
        <div className='flex justify-center items-center w-full h-screen bg-gray-900'>
            <div className='flex flex-col border-2 gap-1  border-black px-5 py-3 bg-gray-100 rounded-md justify-center items-center relative bottom-11'>
                <h1 className='text-center my-4 text-2xl font-semibold '>Sign Up</h1>
                    <Input label='First Name' className='p-1' height='h-10'/>
                    <Input label='Last Name' className='p-1' height='h-10'/>
                    <Input label='Email' className='p-1' height='h-10'/>
                    <Input label='Passowrd' className='p-1' height='h-10'/>
                    <Button  className='text-center mt-2 p-2' >Sign Up</Button>
            </div>
        </div>
    )
}

export default Signup;