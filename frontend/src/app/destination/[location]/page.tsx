import React from 'react';
import { Metadata } from 'next';

import Destination from '@/components/section/destination';
import { AllExperienceProps } from '@/types/regular';
import { fetchAllExperiences } from '@/app/api/experienceApi';





async function fetchExperience(location: string): Promise<AllExperienceProps> {
  const experiences = await fetchAllExperiences();

  // Fix: Remove 'Explore the ' now (including 'the')
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
  const { location } = await params; // await it here
  const decodedLocation = decodeURIComponent(location);

  // Fetch the experience data dynamically
  const experience = await fetchExperience(decodedLocation);

  return <Destination location={decodedLocation} experience={experience} />;
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


