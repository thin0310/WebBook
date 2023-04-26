import React from 'react'
import './Header.css';

export const Header = () => {
  return (
    <div className='containerheader'>
      <div className='iconheader'>
        <div className='icon'>
           <h1>RVbook</h1>
           <h3> Sách chứa đựng cuộc đời </h3>
        </div>

        <div className='search'>
          <div className='searchcontain'>
          <label> Tìm Kiếm</label>
          <input placeholder='Nhập tên sách' type="text" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  )
}
