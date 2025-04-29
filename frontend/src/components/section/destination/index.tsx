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






function Destination({experience}: { experience:AllExperienceProps}) {
  return (
    <div>
      <HeroSection title={experience.title} main_image={experience.main_image}/>
      <Location place_name={experience.place_name}
       duration_days={experience.duration_days} duration_nights={experience.duration_nights}
       description={experience.description}
       />

      <TripInfo location={experience.place_name}/>
      <HoldPlaceRecommend experienceId={experience.id}/>
      <TenaryHolder place_name={experience.title} experienceId={experience.id}/>
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