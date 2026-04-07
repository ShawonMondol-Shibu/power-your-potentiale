import React from 'react'

export default function FocusItem({ title, description}: { title: string; description: string}) {
  return (
    <div className="space-y-2">
    <div className="flex items-center gap-2">
      <h3 className="font-semibold text-lg text-white">{title}</h3>
    </div>
    <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
      {description}
    </p>
  </div>
  )
}
