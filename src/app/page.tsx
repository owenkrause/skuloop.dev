'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'

export default function Home() {

  const [loading, setLoading ] = useState(true)
  useEffect(() => {
    setInterval(() => { setLoading(false) }, 2000)
  }, [])

  const [scrollY, setScrollY] = useState(0)

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    setScrollY((event.target as HTMLElement).scrollTop)
  }

  return (
    <div className='flex w-screen h-screen justify-center items-center'>
      <div className='flex flex-col w-[495px] h-[528px] rounded-lg border-8 border-gray-800 bg-gray-200 drop-shadow-[.75rem_.75rem_#424242]'>
        <div className='flex justify-between items-center w-full h-14 border-b-8 border-gray-800'>
          <div className='flex'>
            <Image className='w-6 h-6 ml-3 mr-3 my-auto' width={190} height={190} src='/pfp.png' alt='profile picture'></Image>
            <h3>owen krause</h3>
          </div>
          <div className='flex mr-3 gap-3'>
            <div>[ <Link className='text-[#0000EE]' href='https://www.instagram.com/owen.krause/' target='_blank'>socials</Link> ]</div>
            <div>[ <Link className='text-[#0000EE]' href='#' target='_blank'>resume</Link> ]</div>
          </div>
        </div>
        <div className='flex h-[456px] justify-center items-center'>
          <div className='flex w-[455px] h-[432px] justify-end border-4 border-gray-800'>
            { loading ? (
              <div className='flex w-full h-full justify-center items-center'>
                <div className='flex flex-row items-center'>
                  <div className='z-10 loadingBarLeft w-[4px] h-2 bg-transparent'></div>
                  <div className='w-[316px] h-6 border-y-4 border-gray-800'>
                    <div className='loadingBar w-0 z-0 animate-[width_2s_linear_forwards] ml-[-4px] h-full bg-gray-800'></div>
                  </div>
                  <div className='loadingBarRight w-[4px] h-2 bg-transparent'></div>
                </div>
              </div>
            ) : (
              <>
                <div className='overflow-auto	flex w-[427px] h-full' onScroll={event => handleScroll(event)}>
                  <div className='flex flex-col p-4 w-full h-[524px]'>
                    <h1>Welcome to my website,</h1>
                    <h2>I am a backend software engineer most comfortable with Typescript.</h2>
                    <br />
                    <ul>Some of my hobbies include...
                      <li>&nbsp;&nbsp;- coding</li>
                      <li>&nbsp;&nbsp;- fashion</li>
                      <li>&nbsp;&nbsp;- anime</li>
                    </ul>
                  </div>
                </div>
                <div className='w-5 h-full bg-gray-400 border-l-4 border-gray-800 shadow-[inset_0px_-1px_4px_#424242]'>
                  <div className='scrollIcon' style={{ 'marginTop': `calc((${scrollY}  / 100) * 384px)`}}></div>
                </div>
              </>
            )}
          </div>
        </div>
        
      </div>
    </div>
  )
}


/*
0 -> 0%

212.5 -> 50%

425 -> 100%

(scroll / 425) * 425

*/