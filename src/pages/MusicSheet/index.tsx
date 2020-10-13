import React from 'react'
import MusicSheetHeader from './components/MusicSheetHeader'
import MusicSheetContent from './components/MusicSheetContent'
import './index.scss'

export default function MusicSheet () {
  return (
    <div className="wyy-music-sheet">
      <MusicSheetHeader />
      <MusicSheetContent />
    </div>
  )
}
