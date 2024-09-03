// import React from 'react'
import Container from '../Layout/Container'
import Everytime from '../../assets/Everytime.png'
import msone from '../../assets/msone.png'
import smtwo from '../../assets/smtwo.png'
import cmthree from '../../assets/cmthree.png'
const Service = () => {
  return (
    <div className='pt-[100px] pb-20'>
        <Container>
            <div>
            <img className='m-auto' src={Everytime} alt='' />
            <br/>
            <h1 className='font-sans font-bold text-secondary text-[48px] text-center'>Our Service</h1>
            <br/>
            <p className='font-pap font-regular text-gray text-[18px] text-center m-auto w-[332px]'>We have been providing great flooring solutions service.</p>
            </div>
            
            <div className='flex justify-between py-[100px]'>
              <div className='w-[370px] h-[395px] bg-[#EBF7E9] hover:bg-[#faffc2] rounded-xl py-5 px-2 text-center drop-shadow-2xl transition ease-in-out '>
                <img className=' w-[64px] h-[64px] mx-[140px] mt-[20px]' src={msone} alt='' />
                <br/>
                <h1 className='text-secondary text-[18px] font-bold font-sans'>MARKETING STRATEGY</h1>
                <br/>
                <p className='text-gray text-[18px] font-regular font-pap w-[257px] m-auto'>Social Media has changed the way we interact & do business while creating</p>
                <br/>
                <button className='font-sans text-secondary hover:text-primary font-semibold text-[18px]'>Read more</button>
              </div>
              <div className='w-[370px] h-[395px] bg-[#B4E9A7] hover:bg-[#d9ff9f] rounded-xl py-5 px-2 text-center drop-shadow-2xl transition ease-in-out'>
              <img className=' w-[64px] h-[64px] mx-[140px] mt-[20px]' src={smtwo} alt='' />
                <br/>
                <h1 className='text-secondary text-[18px] font-bold font-sans'>Social Marketing</h1>
                <br/>
                <p className='text-gray text-[18px] font-regular font-pap w-[257px] m-auto'>Social Media has changed the way we interact & do business while creating a new avenue.</p>
                <br/>
                <button className='font-sans text-secondary hover:text-primary font-semibold text-[18px]'>Read more</button>
              </div>
              <div className='w-[370px] h-[395px] bg-[#FBF1EC] hover:bg-[#ffc0fb] rounded-xl py-5 px-2 text-center drop-shadow-2xl transition ease-in-out'>
              <img className=' w-[64px] h-[64px] mx-[140px] mt-[20px]' src={cmthree} alt='' />
                <br/>
                <h1 className='text-secondary text-[18px] font-bold font-sans'>Content Marketing</h1>
                <br/>
                <p className='text-gray text-[18px] font-regular font-pap w-[278px] m-auto'>Content Marketing is the other fold of online advertisement. If you are looking to build.</p>
                <br/>
                <button className='font-sans text-secondary hover:text-primary font-semibold text-[18px]'>Read more</button>
              </div>
            </div>
        </Container>
    </div>
  )
}

export default Service