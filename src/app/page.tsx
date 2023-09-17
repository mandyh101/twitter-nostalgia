import React from 'react'
import { BsDot } from 'react-icons/bs'
import LeftSideBar from './components/LeftSideBar'

const Home = () => {
  return (
    <div className='w-full h-full justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        <LeftSideBar />
        <main className='ml-[275px] flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
          <h1 className='3xl font-bold p-6 text-white backdrop-blur bg-black/10 sticky top-0'>Home</h1>
          <div className='flex items-stretch space-x-2 px-4 py-4 border-t-[0.5px] border-b-[0.5px] border-gray-600 relative'>
            <div className='w-10 h-10 bg-slate-400 rounded-full flex-none'></div>
            <div className='flex flex-col w-full h-full'>
              <div className=''>
                <input type="text" 
                  className='w-full h-full bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none text-2xl placeholder:text-gray-600 text-white' 
                  placeholder="What's happening?!"
                  />
              </div>
              <div className='w-full justify-between items-center flex'>
                <div>
                  
                </div>
                <div className='w-full max-w-[70px]'>
                  <button 
                    className='rounded-full px-4 py-2 w-full bg-twitterColor text-sm font-semibold text-center hover:bg-opacity-70 transition duration-200'
                    >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            {
              Array.from({length:5}).map((_,i) => (
                <div key={i} className="flex space-x-4 p-4 border-b-[0.5px]">
                  {/* Tweeter's avatar on left */}
                  <div>
                    <div className='w-10 h-10 p-4 bg-slate-200 rounded-full'></div>
                  </div>
                  {/* Rest of tweet content on right  */}
                  <div className='flex flex-col space-y-4'>
                    {/* user details */}
                    <div className='flex items-center space-x-1 text-white'>
                      <div className='font-bold'>Name of account</div>
                      <div>@username</div>
                      <BsDot />
                      <div>4h</div> {/* TODO make dynamic - time since tweet was published  */}
                    </div>
                    {/* tweet text */}
                    <div className='text-white text-sm'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque officia dignissimos fuga quia voluptates consectetur consequatur eveniet sed cumque error ullam aliquam debitis officiis, maxime nesciunt nihil voluptate aut a, quas neque cum earum provident aperiam?
                    </div>
                    <div className='bg-slate-400 aspect-square w-full h-96 rounded-xl'>
                      {/* square placeholder for tweet media */}
                    </div>
                    <div className='flex items-center space-x-2 w-full text-white'>
                      <div>C</div>
                      <div>R</div>
                      <div>L</div>
                      <div>S</div>
                      <div>SH</div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
        <section></section>
      </div>
    </div>
  )
}

export default Home