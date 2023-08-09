export default function Home() {
  return (
    <div className='flex w-screen h-screen justify-center items-center'>
      <div className='flex flex-col w-[495px] h-[528px] rounded-lg border-8 border-gray-800 bg-gray-200 drop-shadow-[.75rem_.75rem_#424242]'>
        <div className='w-full h-14 border-b-8 border-gray-800'></div>
        <div className='flex h-full justify-center items-center'>
          <div className='z-10 loadingBarLeft w-[4px] h-2 bg-transparent'></div>
          <div className='w-[316px] h-6 border-y-4 border-gray-800'>
            <div className='w-0 z-0 animate-[width_3s_linear_forwards] ml-[-4px] h-full bg-gray-800'></div>
          </div>
          <div className='loadingBarRight w-[4px] h-2 bg-transparent'></div>
        </div>
      </div>
    </div>
  )
}


// 