import React from 'react'
import {HiOutlineHashtag} from 'react-icons/hi'
import {HiEnvelope} from 'react-icons/hi2'
import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsTwitter,
  BsEnvelope,
  BsThreeDots,
} from "react-icons/bs";

import Link from 'next/link';
// TODO update icons
const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter
  },
  {
    title: 'Home',
    icon: BiHomeCircle
  },
  {
    title: 'Notifications',
    icon: BsBell
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Messages',
    icon: HiEnvelope
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark
  },
  {
    title: 'Profile',
    icon: BiUser
  },
  {
    title: 'More',
    icon: BsThreeDots
  },
]

// TODO make left side bar responsive for mobile (slide out menu from left when profile pic clicked, and small screens, icons only)
function LeftSideBar() {
  return (
    <>
      <section className='relative left-0 w-1/5 flex flex-col h-screen items-stretch mx-4'>
        <div className='fixed'>
          <div className='flex flex-col items-stretch h-full space-y-4 mt-4'>
            {
              NAVIGATION_ITEMS.map((item) => (
                <Link className="hover:bg-white/10 text-white transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-4" href={`/${item.title.toLowerCase()}`} key={item.title}>
                  <div>
                    <item.icon />
                  </div>
                  {item.title != 'Twitter' && <div>{item.title}</div>}
                </Link>
              ))
            }
            <button className='rounded-full p-2.5 bg-primary text-lg text-center hover:bg-opacity-70 transition duration-200 w-full'>
              Tweet
            </button>
          </div>
          <div>
            <button className='flex items-center w-full rounded-full bg-transparent p-3 text-xs text-center hover:bg-white/10 transition duration-200 justify-between text-white'>
              <div className='flex items-center space-x-2'>
                <div className='rounded-full bg-slate-400 w-8 h-8'></div>
                <div className='text-left text-xs'>
                  <div className='font-semibold'>mandyCodes</div>
                  <div className=''>@mandycodes30</div>
                </div>
              </div>
              <div>
                <BsThreeDots/>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default LeftSideBar