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
          <section className='sticky top-0 mt-2 flex flex-col items-stretch h-screen px-6 w-[30%]'>
            <div>
              <div className='relative w-full h-full'>
                <label 
                  htmlFor='searchBox' 
                  className='absolute top-0 left-0 h-full flex items-center justify-center p-4'
                >
                  <BsSearch className='w-4 h-4 text-gray-500' title='Search Twitter'/>
                </label>
                <input
                  id='searchbox'
                  type="text"
                  placeholder='Search'
                  className='outline-none bg-neutral-900 w-full h-full rounded-full px-10 py-3 border border-transparent focus:border-twitterColor'/>
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