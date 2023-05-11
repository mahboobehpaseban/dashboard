import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import Chart from './../../components/chart/Chart'
import {prodactsData} from './../../datas'
import PublishIcon from "@mui/icons-material/Publish"

export default function Product() {
  return (
    <div className='prodact'>
      <div className="prodactTitleCantainer">
        <h1 className="prodactTitle">Product</h1>
          <Link to="/newProduct">
<button className='prodactAddButton'>Create</button>
</Link>
</div>
<div className="prodactTop">
<div className="prodactTopLeft">
  <Chart title="Sale In Mount" data={prodactsData} dataKey='Sale'  />
</div>
<div className="prodactTopRight">
  <div className="prodactInfoTop">
    <img src="/images/avatar.jpg" alt="Labtap" className='prodactInfoImg' />
    <span className="prodactName">Dell Lap</span>
  </div>
  <div className="prodactInfoButton">
    <div className="prodactInfoItem">
      <div className="prodactInfoKey">ID:</div>
      <div className="prodactInfoVaue">132</div>
    </div>
    <div className="prodactInfoItem">
      <div className="prodactInfoKey">Name:</div>
      <div className="prodactInfoVaue">Dell LabTop</div>
    </div>
    <div className="prodactInfoItem">
      <div className="prodactInfoKey">Sale:</div>
      <div className="prodactInfoVaue">9000$</div>
    </div>
    <div className="prodactInfoItem">
      <div className="prodactInfoKey">Active:</div>
      <div className="prodactInfoVaue">Yes</div>
    </div>
    <div className="prodactInfoItem">
      <div className="prodactInfoKey">In Stock:</div>
      <div className="prodactInfoVaue">No</div>
    </div>

  </div>
</div>
</div>

<div className="prodactButtom">
  <form action="" className="prodactForm">
    <div className="prodactFormLeft">
      <label>prodact Name</label>
      <input type="text" placeholder='Dell LabTop' />
      <label>In STick</label>
      <select name="" id="inStock">
        <option value="yes">Yes</option>
        <option value="no">NO</option>
      </select>
      <label>Active</label>
      <select name="" id="inStock">
        <option value="yes">Yes</option>
        <option value="no">NO</option>
      </select>
    </div>
    <div className="prodactFormRight">
      <div className="prodactUplader">
        <img src="/images/product6.jpg" alt="profile photo" className='prodactUpladerImg' />
        <label>
      <PublishIcon/>
        </label>
        <input type="file" style={{display:'none'}} />
      </div>
      <button className='prodactButton'>Uplod Edit</button>
    </div>


  </form>
</div>
        
    </div>
  )
}
