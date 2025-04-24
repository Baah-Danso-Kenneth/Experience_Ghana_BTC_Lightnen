import { placeRecommend } from '@/lib/data'
import React from 'react'
import PeopleTaught from './peopleTaught'

function HoldPlaceRecommend() {
  return (
         <div className="flex items-center justify-center gap-10 py-10">
                 {placeRecommend.map(({ name,testimony }, index) => (
                   <PeopleTaught
                         key={index} name={name} testimony={testimony}
                   />
                 ))}
    </div>
  )
}

export default HoldPlaceRecommend