import React from 'react'
import chooseImage from '../assets/choose-image.png';
const Card = ({
    image,
    heading,    
    description,
}) => {
    return (
        <div>
            <div className='w-60 h-80 bg-slate-200 rounded-md  flex flex-col mx-auto space-y-8'>
                <div className=' w-24  flex items-center justify-center mx-auto mt-2'><img src={ image } alt="" /></div>
                <h5 className='mt-4 text-center font-semibold text-gray-600'>{heading}</h5>
            <p className='text-gray-600 text-center'>{description}</p>
            </div>
        </div>
    )
}

export default Card
