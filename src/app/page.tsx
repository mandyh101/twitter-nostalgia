import React from 'react'
import { BsSearch } from 'react-icons/bs'
import LeftSideBar from './components/LeftSideBar'
import MiddleSection from './components/MiddleSection'

const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-[90vw] w-full h-full flex relative'>
        <LeftSideBar />
        <MiddleSection/>
          <section className='flex flex-col items-stretch h-screen px-6 w-[30%]'>
            <div>
              <div className='w-full h-full relative space-x-4'>
                <label htmlFor='searchBox' className='absolute top-0 left-0 h-full flex items-center justify-center'>
                  <BsSearch className='w-4 h-4 text-gray-500' title='Search Twitter'/>
                </label>
                <input
                  id='searchbox'
                  type="text"
                  placeholder='Search'
                  className='outline-none bg-transparent border-none w-full h-full rounded-xl px-4 py-8 '/>
              </div>
            </div>
            <div></div>
            <div></div>
          </section>
      </div>
    </div>
  )
}

export default Home