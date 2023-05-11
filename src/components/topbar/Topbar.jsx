import React from 'react'
import './Topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbarwraper'>

         <div className="topLeft">
          <span className='logo'>MeloLearn</span>
         </div>

         <div className="topRight">
          <div className='topbarIconContainer'>
            <NotificationsIcon />
            <span className="tapIconBadge">2</span>
            </div>
            <div className='topbarIconContainer'>
            <LanguageIcon />
            <span className="tapIconBadge">2</span>
          </div>
          <div className='topbarIconContainer'>
            <SettingsIcon />
          </div>
          <img src='/images/avatar2.jpg' className='topAvatar'/>
         </div>
        </div>
        </div>
  )
}
 