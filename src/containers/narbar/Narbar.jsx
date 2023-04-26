import React from 'react';
import './nabar.css';
import { useState } from 'react';
import {Link} from 'react-router-dom'

export const Narbar = () => {

    const [data, setData]= useState();
    const changeValue = (value)=>{
    setData(value)
    console.log(value)
      };
    return (
        <div className='containernabar'>
        <div className='narbartable'> 
            <ol>
                <li className='menu'> 
                    <div className='the'>
                       <Link to="/"><p>Trang chủ</p></Link> 
                    </div>
                </li>
                <li> 
                    <div className='the'>
                    <Link to= "/gioithieu"><p>Giới Thiệu</p></Link>
                    </div>
                </li>                
                <li> 
                    <div className='the'>
                        <Link to="/"><p>Cộng Đồng </p></Link>
                    </div>
                </li>                
                <li> 
                    <div className='the'>
                       <Link to="/login"><p>Đăng Nhập </p></Link>
                    </div>
                </li>                
                <li> 
                    <div className='the'>
                         <Link to="/register"><p>Đăng Kí</p></Link>
                    </div>
                </li>
            </ol>
        </div>
    </div>
      )
}


