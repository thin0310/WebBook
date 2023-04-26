import React from 'react'
import { datasach } from '../../constants/darasach'
import { useState } from 'react'
import { Item } from '../../components/item/Item'


export const Listitem = () => {
  const [best, setBest] = useState(datasach.filter((value)=>{
    return value.c == "best seller"
  }))
  const [like, setLike] = useState(datasach.filter((value)=>{
    return value.l == "like"
  }))
  const [booknew, setBooknew] = useState(datasach.filter((value)=>{
    return value.m == "moi"
  }))
  return (
    <div className='containerlissitem'>
      
      <div className='tiltlelist'>
         <h1>Best seller</h1>
      </div>
      <div className='topiclist'>
        {
          best.map((el,index)=>{
            return (
                <Item key={index} data ={el}/>
            )
          })
        }
      </div>
      <div className='tiltlelist'>
      <h1>The Most Favorite</h1>
      </div>
      <div className='topiclist'>
        {
          like.map((el,index)=>{
            return (
              <div>
                <Item key={index} data ={el}/>
              </div>
            )
          })
        }
      </div>
      <div className='tiltlelist'>
      <h1>New Book</h1>
      </div>
      
      <div className='topiclist'>
        {
          booknew.map((el,index)=>{
            return (
              <div>
                <Item key={index} data ={el}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
