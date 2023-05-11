import { useState} from 'react';
import {products} from '../../datas'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline' 

import './NewUser.css'

export default function NewUser() {
  const[productsData,setProductsData]=useState(products)
  const productsDelete=productsID=>{
    setProductsData(productsData.filter(product=>product.id!=productsID))
  }

  const columns=[
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
  },
  {   
       field: 'title',
       headerName: 'Name',
       width: 200,
       renderCell:(params)=>{
      return  (
        <>
        <Link to={`/product/${params.row.id}`} className='link'>
          <div className="userListUser">
            <img srs={params.row.avatar} className='userListImg'/>
            {params.row.title}
          </div>
          </Link>
          </>
      )
      }
},{
  field:'price',
  headerName:'Price',
  width:120
},{
  field:'action',
  headerName:'Action',
  width:150,
  renderCell:(params)=>{
    return (
      <>
      <Link to={`/product/${params.row.id}`} className='link'>
        <button className='userListEdit'>Edit</button>
      </Link>
      <DeleteOutlineIcon className='userListDelete'
       onClick={()=>productsDelete(params.row.id)}  />
      </>
    )
  }
}
  ]

  return (
    <div className='UserList'>
      <DataGrid
      rows={productsData}
      columns={columns}
      disableSelectionOnClick
      checkboxSelection
      />
    </div>
  )
}
