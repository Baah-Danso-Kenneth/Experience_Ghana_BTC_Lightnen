'use client'

import { Button } from '@/components/ui/button';
import { useExperience } from '@/hooks/useExperience'
import Link from 'next/link';
import { useParams } from 'next/navigation'
import Image from 'next/image'

function TourGuide() {
    const {id} = useParams();
    const {experiences} = useExperience();

    const experience = experiences?.find(exp=>parseInt(id as string)=== exp.id);

    const guide = experience?.guide;


  return (
    <div className='bg-white'>
    <div className='min-h-screen flex items-center justify-center  px-6 py-12'>
      <div className='max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>

        {/* Left - Image */}
        <div className='w-full h-[400px] md:h-[600px] relative  overflow-hidden shadow-lg'>
          <Image
            src={guide?.image || '/images/default-guide-image.png'}
            alt="Trip Leader"
            fill
            className='object-cover'
          />
        </div>

        
        <div className='space-y-6 text-gray-800 place-self-start'>
          <h1 className='text-4xl md:text-5xl font-dmMono uppercase'>{guide?.name}</h1>

          <div className='text-lg md:text-xl'>
            <h2 className='font-bowlby'>Accra Trip Leader</h2>
            <p className='uppercase italic text-gray-500'>Adenta Fafraha, Accra</p>
          </div>

          <div className='space-y-4 text-[16px] font-poppins leading-relaxed'>
            
            <p>{guide?.bio}</p>

          </div>
        </div>
      </div>
      </div>

      <div className='flex flex-col items-center justify-center space-y-3 pb-20'>
        <h1 className='text-4xl font-play_flaire uppercase'>Meet {guide?.name?.slice(0,5)} on our {experience?.place_name} trips</h1>
        <Link href="">
           <Button className="px-10 text-[16px]">Travel with us</Button>
        </Link>
      </div>

    </div>
  );
}

export default TourGuide