import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {newMembers} from './../../datas'
import './WidgetSm.css'
export default function WidgetSm() {
  return (
<div className="widgetSm">
    <span className="widgetSmTitle">New Join Membords</span>
    <ul className="widgetSmList">
     {newMembers.map((user)=>(


        <li key={user.id} className="widgetSmListItem">
            <img src={user.img} className='widgetSmImg'/>
            <div className="widgetSmUser">
                <span className="widgetSmName">{user.username}</span>
                    <span className="widgetSmTitles">{user.title}</span>
            </div>
            <button className="widgetSmBotton">
                <VisibilityIcon className='widgetSmIcon'/>
            </button>
        </li>
             ))}

        </ul>
</div>
    )
}
