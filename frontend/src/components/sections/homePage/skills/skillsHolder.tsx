import React from 'react'
import SkillsContent from './skillsContent'
import { skills } from '@/lib/data'

function SkillsHolder() {
  return (
    <div className=' border py-5 border-l-0 border-r-0'>
    <div className='flex overflow-hidden group '>
        <div className='animate-loop-scroll group-hover:paused'>
            <div className='flex'>
                {skills.map(({name},index)=>(
                <SkillsContent name={name} key={index}/>
                 ))}
            </div>
        </div>

        <div className='animate-loop-scroll group-hover:paused'>
            <div className='flex'>
                {skills.map(({name},index)=>(
                <SkillsContent name={name} key={index}/>
                 ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default SkillsHolder