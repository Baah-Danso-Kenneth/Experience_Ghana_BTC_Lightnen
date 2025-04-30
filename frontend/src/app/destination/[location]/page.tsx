import React from 'react';
import { Metadata } from 'next';

import Destination from '@/components/section/destination';
import { AccomodationProps, AllExperienceProps } from '@/types/regular';
import { fetchAllExperiences } from '@/app/api/experienceApi';
import { useAccommodation } from '@/hooks/useAccommodaion';
import { fetchAllAccommodations } from '@/app/api/accomodationApi';





async function fetchExperience(location: string): Promise<AllExperienceProps> {
  const experiences = await fetchAllExperiences();


  const cleanLocation = location.startsWith('Explore the ')
    ? location.replace('Explore the ', '')
    : location;

  const experience = experiences.find(
    (exp: AllExperienceProps) => exp.title.trim().toLowerCase() === cleanLocation.trim().toLowerCase()
  );

  if (!experience) {
    throw new Error(`Experience not found for location: ${cleanLocation}`);
  }

  return experience;
}


export default async function Page({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params; 
  const decodedLocation = decodeURIComponent(location);
  const experience = await fetchExperience(decodedLocation);
 const accommodations = await fetchAllAccommodations()
 const accommodation = accommodations.find((acc:AccomodationProps)=>acc.experience.id === experience.id)

  if(!accommodation){
    throw new Error('No accommodation')
  }

  return <Destination  experience={experience} accommodation={accommodation} />;
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const { location } = await params; 
  const decodedLocation = decodeURIComponent(location);

  const cleanLocation = decodedLocation.startsWith('Explore the ')
    ? decodedLocation.replace('Explore the ', '')
    : decodedLocation;

  return {
    title: `Explore ${cleanLocation}`,
    description: `Discover the beauty of ${cleanLocation} with us.`,
  };
}


