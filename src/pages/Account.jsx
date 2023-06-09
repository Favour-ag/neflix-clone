import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
      <img className='w-full h-[400px] object-cover'
       src="https://assets.nflxext.com/ffe/siteui/vlv3/73334647-ad51-42a9-b07b-93298cc2a8e1/5cfa42b8-7a6a-46f1-bb8d-4450280ccda7/NG-en-20230605-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
      alt="/"
       />
       <div className='bg-black/60 fixed top-0 left-0 h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
      </div>
      </div>
      <SavedShows /> 
    </>
  )
}

export default Account