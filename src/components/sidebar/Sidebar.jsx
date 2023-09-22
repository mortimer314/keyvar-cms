import React from 'react'
import {TbLayoutSidebarRightCollapseFilled} from "react-icons/tb"
import Accordian from '../accordian/Accordian'
import { sidebarDatas } from '../../datas'
import "./Sidebar.css"


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-wapper">
        <div className="sidebar-content">
          {/* {sidebarDatas.length ? sidebarDatas.map((item ,index)=> <Accordian key={index} {...item}/>):""} */}
          <Accordian  items={sidebarDatas}/>
        </div>
        <div className="sidebar__collapse">
            <button>
            <TbLayoutSidebarRightCollapseFilled className="sidebar__collapse-icon"/>
            نمایش نواری
            </button>
        </div>
      </div>
    </div>
  )
}
