import React from 'react'
import { useState } from 'react'
import './listtopic.css';
import {Link} from 'react-router-dom'

export const ListTopic = () => {
  const [data,setData ]=useState([
    'Văn Học Việt Nam',
    'Văn Học nước ngoài', 
    'Kinh Tế Chính Trị', 
    'Lịch sử - Địa lý',
    'Thời sự Văn Hóa',
    'Manga-Anime',
    'Kĩ Năng Sống']);
  const dem =[
  "/Loaisach/1",
  "/Loaisach/2",
  "/Loaisach/3",
  "/Loaisach/4",
  "/Loaisach/5",
  "/Loaisach/6",
  "/Loaisach/7"
];
  return (
    <div className='listtopic'>
      <div className='containertopic'>
        <ul>
          <li className='dropdown'>
            <p>DANH MỤC SÁCH</p>
            <div className='dropdowncontent'>
              {data.map((data, index) => {
                return (
                  <li key={index}>
                    <Link to={dem[index]}>
                      <p>{data}</p>
                    </Link>
                  </li>
                );
              })}
            </div>
          </li>
          <li>
            <p>TÁC GIẢ</p>
          </li>
          <li className='dropdown'>
            <p>NHÀ SÁCH</p>
            <div className='dropdowncontent'>
              <li><a href="https://tiki.vn/nha-sach-tiki/c8322"> <p>TIKI</p></a></li>
              <li><a href="http://nhanam.com.vn/"> <p> Nhã Nam</p></a></li>
              <li><a href="https://www.fahasa.com/"><p> Fahasa</p></a></li>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

