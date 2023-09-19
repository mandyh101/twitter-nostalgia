import React from 'react'
import LeftSideBar from './components/LeftSideBar'
import MiddleSection from './components/MiddleSection'

const Home = () => {
  return (
    <div className='w-full h-full justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        <LeftSideBar />
        <MiddleSection/>
        
        <section></section>
      </div>
    </div>
  )
}

export default Home