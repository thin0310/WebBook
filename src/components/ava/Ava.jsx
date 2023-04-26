import React from 'react'
import { dataaccounts } from '../../constants/data'
import "./ava.css"
import { useState } from 'react'

export const Ava = (props) => {
    const [[datainfo], setDatainfo] = useState(
        dataaccounts.filter((el)=>{
        return el.email == props.email
    })
    );
  return (
    <div className='ava'>
        <p>{datainfo.name}</p>
        <img src={`/image/${datainfo.img}.jpg`}  />
    </div>
  )
}
 