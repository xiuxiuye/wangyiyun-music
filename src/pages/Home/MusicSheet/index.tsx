import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MusicSheetHeader from './components/MusicSheetHeader'
import MusicSheetContent from './components/MusicSheetContent'
import './index.scss'

interface MusicSheets {
  [propName: string]: object;
}

const musicSheets: MusicSheets = {}
const files = require.context('../../../assets/musicSheets', true, /\.js$/)
files.keys().forEach(key => {
  const sheet = files(key).default
  musicSheets[sheet.id] = sheet
})

export default function MusicSheet (props: any) {
  const [ musicSheet, setMusicSheet ] = useState({})
  const { id } = useParams()
  useEffect(() => {
    setMusicSheet(musicSheets[id])
  }, [id])
  return (
    <div className="wyy-music-sheet">
      <MusicSheetHeader musicSheet={musicSheet} />
      <MusicSheetContent musicSheet={musicSheet} />
    </div>
  )
}
