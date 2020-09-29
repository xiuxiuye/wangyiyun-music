import React from 'react'
import SearchHistory from '../SearchHistory/index'
import SearchHot from '../SearchHot/index'
import './index.scss'

interface SubSearchProps {
  styles: object,
  setIsInSubSearch: Function
}

function SubSearch ({ styles, setIsInSubSearch }: SubSearchProps) {
  return (
    <div className="wyy-subsearch" style={styles} onMouseEnter={() => setIsInSubSearch(true)} onMouseLeave={() => setIsInSubSearch(false)}>
      <div className="wyy-subsearch-wrapper scrollbar">
        <SearchHistory />
        <SearchHot />
      </div>
    </div>
  )
}

export default SubSearch
