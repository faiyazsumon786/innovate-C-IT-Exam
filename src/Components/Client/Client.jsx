// import React from 'react'
import Container from '../Layout/Container'
import Everytime from '../../assets/Everytime.png'
import client1 from '../../assets/client1.png'
import client2 from '../../assets/client2.png'
import client3 from '../../assets/client3.png'

const Client = () => {
  return (
    <div className='pt-[100px] pb-14'>
      <Container>
        <div className='flex justify-between py-[100px]'>
          <div className='w-[380px] h-[450px] bg-white hover:bg-[#D8EAFF] rounded-xl py-5 px-2 text-center drop-shadow-2xl'>
            <img className='pl-7' src={Everytime} alt='' />
            <br />
            <h1 className='text-secondary text-[48px] font-extrabold font-sans'>Client Review</h1>
            <br />
            <p className='text-gray text-[16px] font-regular font-pap w-[331px] m-auto'>people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  </p>
            <br />
            <img className="rounded-full  object-cover" src={client1} alt='' />
          </div>
          <div className='w-[380px] h-[450px] bg-white hover:bg-[#D8EAFF] rounded-xl py-5 px-2 text-center drop-shadow-2xl'>
            <div className='pt-10'>
              <p className='text-gray text-[18px] font-regular font-pap w-[270px] m-auto'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
              <br />
              <img className="rounded-full w-[94px] h-[94px] object-cover" src={client2} alt='' />
              <h4 className=' text-[24px] text-bold pb-2 mt-[-80px] ml-11'>Jane Cooper</h4>
                <p className='ml-11'>Fashion Designer</p>
            </div>
          </div>
          <div className='w-[380px] h-[450px] bg-white hover:bg-[#D8EAFF] rounded-xl py-5 px-2 text-center drop-shadow-2xl'>
            <div className='pt-10'>
              <p className='text-gray text-[18px] font-regular font-pap w-[270px] m-auto'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
              <br />
              <div>
                <img className="rounded-full w-[94px] h-[94px] object-cover" src={client3} alt='' />
                <h4 className=' text-[24px] text-bold pb-2 mt-[-80px] ml-11'>Eleanor Pena</h4>
                <p className='ml-11'>Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Client