import React from 'react'
import { CardTitle } from '../ui/card'

interface SectionTitleProps {
  main: string;
  sub: string;
}

export default function SectionTitle({ main, sub }: SectionTitleProps) {
  return (
    <div>
        <CardTitle className='text-4xl font-bold'>{main}</CardTitle>
        <p className='text-2xl font-medium'>{sub}</p>
    </div>
  )
}
