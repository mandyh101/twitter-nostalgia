import React from 'react'
import { BsSearch } from 'react-icons/bs'


function RightSideBar() {
  return (
    <section className='relative right-0 w-2/5 mt-2 flex flex-col items-stretch px-2 mx-4'>
      <div className='fixed'>
        <div>
          <div className='relative w-full h-full'>
            <input
              id='searchbox'
              type="text"
              placeholder='Search'
              className='outline-none bg-neutral-900 w-full h-full rounded-full px-10 py-3 border border-transparent focus:border-twitterColor peer focus:bg-gray-50'
            />
            <label
              htmlFor='searchBox'
              className='absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-twitterColor'
            >
              <BsSearch className='w-4 h-4' title='Search Twitter'/>
            </label>
          </div>
        </div>
        <div className='flex flex-col bg-neutral-900 rounded-xl my-4 text-white'>
          <h3 className='font-bold text-xl my-4 px-4'>What's happening?!</h3>
          <div>
            {Array.from({length:5}).map((_,i) => (
              <div
              key={i}
              className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200"
              >
                <div className='font-bold text-lg'>Trending item {i + 1}</div>
                <div className='text-xs text-neutral-500'>35.4k</div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col bg-neutral-900 rounded-xl my-4 text-white'>
          <h3 className='font-bold text-xl my-4 px-4'>Who to follow</h3>
          <div>
            {Array.from({length:5}).map((_,i) => (
              <div
              key={i}
              className="hover:bg-white/10 py-4 px-2 space-x-8 flex items-center last:rounded-b-xl transition duration-200"
              >
                <div className='flex flex-row space-x-2'>
                  <div className='w-10 h-10 bg-neutral-600 rounded-full'></div>
                  <div className='flex flex-col'>
                    <div className='font-bold'>Other user</div>
                    <div className='text-xs text-neutral-500'>@otheruser32</div>
                  </div>
                </div>
                <div>
                  <button className='rounded-full px-6 py-2 bg-white text-neutral-950 '>
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='py-4 px-2'>
            <a className='text-twitterColor' href='#'>Show more</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RightSideBar