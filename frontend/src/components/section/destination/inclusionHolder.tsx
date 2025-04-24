import { whatsIncluded, whatsNotIncluded } from '@/lib/data'
import React from 'react'
import InclusionContent from './inclusionContent'

function InclusionHolder() {
  return (
    <div className='grid grid-cols-2 mx-auto max-w-5xl'>
        <InclusionContent title="What's Included" items={whatsIncluded} />
        <InclusionContent title="What's Not Included" items={whatsNotIncluded} />
    </div>
  )
}

export default InclusionHolder