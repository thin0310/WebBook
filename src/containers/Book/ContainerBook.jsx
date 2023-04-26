import React from 'react'
import { Listbookinfo } from './Listbookinfo';

export const ContainerBook = (props) => {
  return (
    <div className='containerbook'>
      <div className='containerinfo'>
        <Listbookinfo id ={props.id}/>
      </div>
  </div>
  )
}
