import React from 'react'
import { HeroSection } from './heroSection'
import Location from './location'
import TripInfo from './tripInfo'
import HoldPlaceRecommend from '@/components/section/destination/holdPlaceRecommend.client';

import TenaryHolder from './tenaryHolder'


import TripLeader from './tripLeader'
import BestTimeHolder from './bestTimeHolder'
import InclusionHolder from './inclusionHolder'
import { AccomodationProps, AllExperienceProps } from '@/types/regular'
import { SleepHolder } from './sleepHolder.client';






function Destination(
  {experience,
  accommodation}:
      { experience:AllExperienceProps,
        accommodation: AccomodationProps
      }) {
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
      <SleepHolder 
      image={accommodation.image}
       name={accommodation.name} 
       description={accommodation.description}
        experienceId={experience.id}/>
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