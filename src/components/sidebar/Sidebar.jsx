import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

import { Link } from 'react-router-dom';
import './Sidebar.css'


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidbarList">
           <Link to='/' className='link'>
            <li className="sidbarListItem active">
            <LineStyleIcon className='sidebarIcon'/>
            Home
            </li>
            </Link>
            <li className="sidbarListItem">
            <TimelineIcon className='sidebarIcon'/>
            Analytics
            </li>
            <li className="sidbarListItem">
            <TrendingUpIcon className='sidebarIcon'/>
            Sales
           </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidbarList">
            <Link to='/users' className='link'>
            <li className="sidbarListItem active">
            <PermIdentityIcon className='sidebarIcon'/>
            Users
            </li>
            </Link>
            <Link to='newUser' className='link'>
            <li className="sidbarListItem">
            <StorefrontIcon className='sidebarIcon'/>
            New User
            </li>
            </Link>
            <Link to='products' className='link'>
            <li className="sidbarListItem">
            <AttachMoneyIcon className='sidebarIcon'/>
            Products
           </li>
           </Link>
           <li className="sidbarListItem">
            <BarChartIcon className='sidebarIcon'/>
            Tranactions
           </li>
           <li className="sidbarListItem">
            <MailOutlineIcon className='sidebarIcon'/>
            Reports
           </li>
          </ul>
        </div>
        <div className="sidebarMenu"> 
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidbarList">
            <li className="sidbarListItem active">
            <DynamicFeedIcon className='sidebarIcon'/>
            Mail
            </li>
            <li className="sidbarListItem">
            <ChatBubbleOutlineIcon className='sidebarIcon'/>
            Feedback
            </li>
            <li className="sidbarListItem">
            <WorkOutlineIcon className='sidebarIcon'/>
            Messages
           </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidbarList">
            <li className="sidbarListItem active">
            <ManageAccountsIcon className='sidebarIcon'/>
            Manage
            </li>
            <li className="sidbarListItem">
            <ShowChartIcon className='sidebarIcon'/>
            Analytics
            </li>
            <li className="sidbarListItem">
            <ReportGmailerrorredIcon className='sidebarIcon'/>
            Reports
           </li>
          </ul>
        </div>

      </div>
    </div>
  )
}
