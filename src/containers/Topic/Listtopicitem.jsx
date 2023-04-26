import React from 'react'
import { useState } from 'react';
import { datasach } from '../../constants/darasach'
import { Item } from '../../components/item/Item';
import "./topic.css"

const typeOfBooks = [
  "Văn Học Việt Nam",
  "Văn Học Nước Ngoài",
  "Kinh Tế Chính Trị",
  "Lịch sử - Địa lý",
  "Thời sự Văn Hóa",
  "Manga-Anime",
  "Kĩ Năng Sống",
]; 

export const Listtopicitem = (props) => {

    const topic = datasach.filter((value)=>{
      return value.Topicid == props.id
    });    
  return (
    <div className='containeritemtopic'>
      <div className='tiltlelist'>
      <h1>
          {typeOfBooks[props.id - 1]}
      </h1>
      </div>
        <ul>
        {
            topic.map((el,index)=>{
                return (
                   <Item key={index} data ={el}/>
                )
              })

        }
        </ul>
    </div>
  )
}
