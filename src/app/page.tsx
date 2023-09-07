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
import Link from '../../node_modules/next/link'

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

const Home = () => {
  return (
    <div className='w-full h-full justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        {/* Left side bar */}
        {/* TODO make the section belwo a fixed element */}
        <section className='flex flex-col h-screen w-72 space-y-4 my-4'>
          <div>
            {
              NAVIGATION_ITEMS.map((item) => (
                <Link className="hover:bg-white/50 text-white transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-4" href={`/${item.title.toLowerCase()}`} key={item.title}>
                  <div>
                    <item.icon />
                  </div>
                  {item.title != 'Twitter' && <div>{item.title}</div>}
                  
                </Link>
              ))
            }
            <button className='rounded-full bg-twitterColor text-xl text-center px-6 py-4 hover:bg-opacity-70 duration-100'>
              Tweet
            </button>
          </div>
        </section>
        <main>Left section</main>
        <section>Right section</section>
      </div>
    </div>
  )
}

export default Home