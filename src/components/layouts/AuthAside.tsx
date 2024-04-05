import Image from 'next/image'
import React from 'react'



export const AuthAside = () => {
  return (
      <div className="bg-slate-600 hidden lg:block w-full md:w-2/3 xl:w-3/5 h-screen">
        <Image
          src={'/img/asideBg.jpg'}
          alt={'bg'}
          className="w-full h-full object-cover"
          width={1200}
          height={1200}
        />
      </div>
  )
}
