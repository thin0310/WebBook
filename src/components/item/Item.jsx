import React from 'react'
import "./item.css"
import {Link} from 'react-router-dom'

export const Item = ({data}) => {
  const address = "/book/" + data.id
  return (
    <div className='iteminfo'>
        <div className='imgitem'>
          <Link to={address}><img src={`/image/${data.id}.jpg`} /></Link>
        </div>
        <div className='imgname'>
          <Link to={address}><p>{data.name}</p></Link> 
        </div>
    </div>
  )
}
