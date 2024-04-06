import React from 'react'
import NavrBar from '../components/NavrBar'
import BigText from '../components/BigText'
import SmallText from '../components/SmallText'
import { aboutBackground, aboutBackgroundImage, homeBackground, homeImage } from '../assets/'
const HomePage = () => {
  return (
    <>
      <div className={ `relative bg-cover ` }>
        <NavrBar />
        <div className=' flex justify-end '>
          <div className=' w-1/2 flex justify-end '>
            <div className='flex flex-col space-y-6 justify-center m-12 '>
              <BigText >Your Favourite Food
                Delivered Hot &
                Fresh </BigText>
              <SmallText>Healthy switcher chefs do all the prep work, like
                peeding, chopping & marinating, so you can cook
                a fresh food.</SmallText>
              <button className='bg-amber-500 rounded-3xl text-white w-36 p-3'>Order Now</button>
            </div>
          </div>

          <div className='w-1/2 bg-green-200 flex justify-end'>
            <div className='absolute'>
              <img className='relative top-32 left-32 w-1/2 z-30' src={ homeImage } alt="" />
            </div>
            <div>
              <img className='' src={ homeBackground } alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className=' min-h-screen flex'>
        <div className='w-1/2'>
          <div className='absolute'>
            <img className='w-2/3 relative top-28 left-8' src={ aboutBackgroundImage } alt="" />
          </div>
          <div className=''>
            <img className='h-full' src={ aboutBackground } alt="" />
          </div>
        </div>
        <div>
          <div className='w-1/2 flex relative' >
            <div className='flex flex-col space-y-6 justify-center m-12 '>
              <BigText >Food Is An Important Part Of A Balanced Diet </BigText>
              <SmallText>Lorem ipsum dolor sit amet consectetur. Non tincidunt
                magna non et elit. Dolor  turpis molestie dui
                magnis facilisis at fringilla quam.</SmallText>
              <SmallText>Non tincidunt magna non et elit. Dolor turpis molestie
                dui magnis facilisis at fringilla quam.</SmallText>
              <button className='bg-amber-500 rounded-3xl text-white w-36 p-3'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-pink-100 min-h-screen'>
        <div></div>
      </div>
    </>
  )
}

export default HomePage
