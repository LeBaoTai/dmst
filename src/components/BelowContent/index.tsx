import QuicklyRead from '@/components/BelowContent/QuicklyRead'
import Tags from '@/components/BelowContent/Tags'
import Video from '@/components/BelowContent/Video'
import React from 'react'

export default function BelowContent() {
  return (
    <div className="grid gap-4 gap-x-10 md:grid-cols-9 lg:grid-cols-12">
      {/* left content */}
      <div className="md:col-span-6 lg:col-span-9">
        <Video />
        {/* sub contents */}
        <Tags />
      </div>

      {/* right content */}
      <div className="hidden md:col-span-3 md:block lg:col-span-3">
        <QuicklyRead />
      </div>
    </div>
  )
}
