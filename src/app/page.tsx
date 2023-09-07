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
      <div className='max-w-screen-lg w-full h-full flex relative'>
        {/* Left side bar */}
        <section className='max-w-screen-lg w-full h-full flex relative'>
          <div>
            {
              NAVIGATION_ITEMS.map((item) => (
                <Link className="bg-white/50 flex items-center justify-centerspace-x-2 rounded-3xl px-4 py-3" href={`/${item.title.toLowerCase()}`} key={item.title}>
                  <div>
                    <item.icon />
                  </div>
                  <div>
                    {item.title}
                  </div>
                </Link>
              ))
            }
          </div>
        </section>
        <main>Left section</main>
        <section>Right section</section>
      </div>
    </div>
  )
}

export default Home