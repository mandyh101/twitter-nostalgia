import React from 'react'
import { BsChat, BsDot, BsThreeDots } from 'react-icons/bs'
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
import {IoStatsChart, IoShareOutline} from  'react-icons/io5'

function MiddleSection() {
  return (
    <>
      <main className='ml-1/5 mr-1/3 flex w-3/5 h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
          <h1 className='3xl font-bold p-6 text-white backdrop-blur bg-black/10 sticky top-0'>
            Home
          </h1>
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
                    className='rounded-full px-4 py-2 w-full bg-twitterColor text-white text-sm font-semibold text-center hover:bg-opacity-70 transition duration-200'
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
                    <div>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-1'>
                          <div className='font-bold text-white'>Name of account</div>
                          <div className='text-gray-400'>@username</div>
                          <div className='text-gray-400'>
                            <BsDot />
                          </div>
                          <div className='text-gray-400'>4h</div>
                          {/* TODO make dynamic - time since tweet was published  */}
                        </div>
                          <div className='text-white'>
                            <BsThreeDots/>
                          </div>
                      </div>
                      {/* tweet text */}
                      <div className='text-white text-base'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque officia dignissimos fuga quia voluptates consectetur consequatur eveniet sed cumque error ullam aliquam debitis officiis, maxime nesciunt nihil voluptate aut a, quas neque cum earum provident aperiam?
                      </div>
                    </div>
                    {/* TODO turn icon buttons into a component */}
                    <div className='bg-slate-400 aspect-square w-full h-96 rounded-xl'>
                      {/* square placeholder for tweet media */}
                    </div>
                    <div className='flex items-center justify-between text-white space-x-2 w-full'>
                      <div className='rounded-full hover:bg-white/10 transition duration-200 p-3 hover:text-twitterColor cursor-pointer'>
                        <BsChat/>
                      </div>
                      <div className='rounded-full hover:bg-white/10 transition duration-200 p-3 hover:text-green-500 cursor-pointer'>
                        <AiOutlineRetweet/>
                      </div>
                      <div className='rounded-full hover:bg-white/10 transition duration-200 p-3 hover:text-red-500 cursor-pointer'>
                        <AiOutlineHeart/>
                      </div>
                      <div className='rounded-full hover:bg-white/10 transition duration-200 p-3 hover:text-twitterColor cursor-pointer'>
                        <IoStatsChart />
                      </div>
                      <div className='rounded-full hover:bg-white/10 transition duration-200 p-3 hover:text-twitterColor cursor-pointer'>
                        <IoShareOutline />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
    </>
  )
}

export default MiddleSection