import React from 'react'
import { HeroSection } from './heroSection'
import Location from './location'
import TripInfo from './tripInfo'
import HoldPlaceRecommend from './holdPlaceRecommend'
import TenaryHolder from './tenaryHolder'
import SleepHolder from './sleepHolder'
import TripLeader from './tripLeader'
import BestTimeHolder from './bestTimeHolder'
import InclusionHolder from './inclusionHolder'
import { AllExperienceProps } from '@/types/regular'






function Destination({location,experience}: {location:string, experience:AllExperienceProps}) {
  return (
    <div>
      <HeroSection title={experience.title}/>
      <Location/>
      <TripInfo/>
      <HoldPlaceRecommend/>
      <TenaryHolder/>
      <InclusionHolder/>
      <SleepHolder/>
      <BestTimeHolder/>

      {experience.guide && (
  <TripLeader
    image={experience.guide.image}
    name={experience.guide.name || 'Awesome Guide'}
  />
)}

    </div>
  )
}

export default Destination