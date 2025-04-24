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

function Destination() {
  return (
    <div>
      <HeroSection/>
      <Location/>
      <TripInfo/>
      <HoldPlaceRecommend/>
      <TenaryHolder/>
      <InclusionHolder/>
      <SleepHolder/>
      <BestTimeHolder/>
      <TripLeader image="/images/sunset.jpg" name="Paege"/>
    </div>
  )
}

export default Destination