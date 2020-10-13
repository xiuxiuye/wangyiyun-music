import React, { useState } from 'react'

interface SiderBlockProps {
  title: string;
  data: Array<SiderBlockData>;
}

interface SiderBlockData {
  id: number;
  title: string;
}

export default function SiderBlock ({ title, data }: SiderBlockProps) {
  const [isExpand, setIsExpand] = useState(true)

  const toggleExpand = () => setIsExpand(pre => !pre)
  const createSheet = (event: any) => {
    event?.stopPropagation()
    console.log(event)
  }

  return (
    <div className="wyy-sider-block">
      <div className="wyy-sider-block-title" onClick={toggleExpand}>
        <span>{title}</span>
        <span className={isExpand ? 'iconfont icon-caret-down' : 'iconfont icon-caret-right'}></span>
        <span className="iconfont icon-plus" onClick={createSheet}></span>
      </div>
      <div className="wyy-sider-block-list">
        {isExpand && data.map(el => <div className="wyy-sider-block-list-item" key={el.id}>
            <span className="iconfont icon-MUSIC"></span>
            <span>{el.title}</span>
          </div>)}
      </div>
    </div>
  )
}
