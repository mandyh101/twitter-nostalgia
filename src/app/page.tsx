import React from 'react'
import LeftSideBar from './components/LeftSideBar'
import MiddleSection from './components/MiddleSection'
import RightSideBar from './components/RightSideBar'

const Home = () => {
  return (
    // TODO make responsive
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='w-[90vw] m-auto h-full max-w-screen-xl flex relative'>
        <LeftSideBar />
        <MiddleSection/>
        <RightSideBar />
      </div>
    </div>
  )
}

export default Home