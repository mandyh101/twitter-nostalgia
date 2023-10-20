import React from 'react'
import LeftSideBar from './components/LeftSideBar'
import MiddleSection from './components/MiddleSection'
import RightSideBar from './components/RightSideBar'

const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-[90vw] w-full h-full flex'>
        <LeftSideBar />
        <MiddleSection/>
        <RightSideBar />
      </div>
    </div>
  )
}

export default Home