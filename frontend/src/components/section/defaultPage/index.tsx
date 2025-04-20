import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import HeroSection from './heroSection'
import BaseContent from './baseContent'

function DefaultPage() {
  return (
    <div>
       <HeroSection/>
       <BaseContent/>
      <Footer/>
    </div>
  )
}

export default DefaultPage