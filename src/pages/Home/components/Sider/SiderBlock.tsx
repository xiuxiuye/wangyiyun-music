import React, { useState, useContext } from 'react'
import { StoreContext } from '../../../../store/provider'
import { useHistory } from 'react-router-dom'

interface Block {
  title: string;
  list: Array<SiderBlockData>;
  foldable?: Boolean;
  newable?: Boolean;
}

interface SiderBlockProps {
  title: string;
  data: Array<SiderBlockData>;
  block: Block;
  currentBlock: string;
  setCurrentBlock: Function;
}

interface SiderBlockData {
  id?: number;
  title: string;
  icon: string;
}

export default function SiderBlock ({ title, data, block, currentBlock, setCurrentBlock }: SiderBlockProps) {
  const [isExpand, setIsExpand] = useState(true)
  const [itemIndex, setItemIndex] = useState(0)
  const store = useContext(StoreContext) as any
  const history = useHistory()

  const toggleExpand = () => setIsExpand(pre => !pre)
  const createSheet = (event: any) => {
    event?.stopPropagation()
  }

  function handleClick (block: string, item: number, musicSheetId: number | undefined) {
    setCurrentBlock(block)
    setItemIndex(item)
    history.push(`/musicsheet/${musicSheetId}`)
  }

  return (
    <div className="wyy-sider-block">
      <div className="wyy-sider-block-title" onClick={toggleExpand}>
        <span>{title}</span>
        {block.foldable ? <span className={isExpand ? 'iconfont icon-caret-down' : 'iconfont icon-caret-right'}></span> : null}
        {block.newable ? <span className="iconfont icon-plus" onClick={createSheet}></span> : null}
      </div>
      <div className="wyy-sider-block-list">
        {isExpand && data.map((el, index) => <div
          className={`wyy-sider-block-list-item ${block.title === currentBlock && index === itemIndex ? 'wyy-sider-block-list-item-active' : ''}`}
          key={el.title}
          style={{borderLeftColor: block.title === currentBlock && index === itemIndex ? store.state.skin.colors.balanceColor : ''}}
          onClick={() => handleClick(block.title, index, el.id)}>
            <span className={`iconfont ${el.icon}`}></span>
            <span>{el.title}</span>
          </div>)}
      </div>
    </div>
  )
}
