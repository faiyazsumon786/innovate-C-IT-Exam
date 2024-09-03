// import React from 'react'
import Container from '../Layout/Container'
import Everytime from '../../assets/Everytime.png'
import process1 from '../../assets/process1.jpg'
import precess2 from '../../assets/process2.jpg'
import process3 from '../../assets/process3.jpg'
const Process = () => {
    return (
        <div className='pt-[100px] pb-20'>
            <Container>
                <div>
                    <img className='m-auto' src={Everytime} alt='' />
                    <br />
                    <h1 className='font-sans font-bold text-secondary text-[48px] text-center'>Our creative process.
                    </h1>
                    <br />
                    <p className='font-sans font-regular text-gray text-[18px] text-center m-auto w-[332px]'>We provide digital experience services to startups and small businesses.
                    </p>
                </div>
                <br />
                <br />
                <div className='flex justify-between'>
                    <div className='pt-16'>
                        <div className='w-[465px] h-[207px] bg-[#EBF7E9] hover:bg-[#d4d4ff] rounded-xl py-5 px-2 drop-shadow-2xl pl-10 duration-300' >
                            <p className='font-sans text-secondary hover:text-primary font-bold text-[18px]'>Step-1</p>
                            <br />
                            <h1 className='text-secondary text-[30px] font-semibold font-sans'>Global SEO Research</h1>
                            <br />
                            <p className='text-gray text-[12px] font-regular font-pap w-[257px]'>Practical tools and features make it easier to build and manage your site.
                            </p>
                        </div>
                    </div>
                    <img className='w-1/2 rounded-lg' src={process1} alt='' />
                </div>
                <br />
                <br />
                <div className='flex  justify-between'>
                    <img className='w-1/2 rounded-lg' src={precess2} alt='' />
                    <div className='pt-16'>
                        <div className='w-[465px] h-[207px] bg-[#D8EAFF] hover:bg-[#d4d4ff] rounded-xl py-5 px-2 drop-shadow-2xl pl-10 duration-300' >
                            <p className='font-sans text-secondary hover:text-primary font-bold text-[18px]'>Step-2</p>
                            <br />
                            <h1 className='text-secondary text-[30px] font-semibold font-sans'>Social media integration</h1>
                            <br />
                            <p className='text-gray text-[12px] font-regular font-pap w-[257px]'>Practical tools and features make it easier to build and manage your site.
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className='flex justify-between'>
                    <div className='pt-16'>
                        <div className='w-[465px] h-[207px] bg-[#FBF1EC] hover:bg-[#d4d4ff] rounded-xl py-5 px-2 drop-shadow-2xl pl-10  duration-300' >
                            <p className='font-sans text-secondary hover:text-primary font-bold text-[18px]'>Step-3</p>
                            <br />
                            <h1 className='text-secondary text-[30px] font-semibold font-sans'>Launching the Application</h1>
                            <br />
                            <p className='text-gray text-[12px] font-regular font-pap w-[257px]'>Practical tools and features make it easier to build and manage your site.
                            </p>
                        </div>
                    </div>
                    <img className='w-1/2 rounded-lg' src={process3} alt='' />
                </div>
            </Container>

        </div>
    )
}

export default Process