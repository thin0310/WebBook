import React from 'react'
import { useState } from 'react';
import { Button } from '../../components/Buton';
import { Input } from "../../components/Input";
import "./index.css"
import { Narbar } from '../narbar/Narbar';
import { Header } from '../../components/Header/Header';
import { ListTopic } from '../../components/ListTopic';
import { Footer } from '../../components/Footer/Footer';

export const FormRegiter = () => {

  const [data, setData] = useState({ 
    email: {
      value: '',
      isError: false,
      msg: '',
    },
    password: {
      value: '',
      isError: false,
      msg: '',
    }
    ,
    nhaplai:{
      value: '',
      isError: false,
      msg: '',
    },   
    Phone:{
      value: '',
      isError: false,
      msg: '',
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const changeValue = (field) => (value) => {
    setData({
      ...data,
      [field]: {
        ...data[field],
        value: value,
      }
    });
  };

  return (
    <div className='containerpageregister'>
      <div className='containerregister'>
        <div className='resiterform'>
            <h2>Đăng Kí</h2>
            <div className='containerresiterform'>
              <div className='email'>
                <p>Email</p>
                <div >
                <Input
                 name={'email'}
                 placeholder={'Email...'}
                 value={data.email.value}
                 handleChange={changeValue('email')}
                 />
                </div>
              </div>
              <div className='Password'>
                <p>Password</p>
                <div >
                <Input
                 name={'Password'}
                 placeholder={'Password...'}
                 type={'password'}
                 value={data.password.value}
                 handleChange={changeValue('password')}
                 />
                </div>
              </div>
              <div className='Nhaplai'>
                <p>Nhập lại Password</p>
                <div >
                <Input
                 name={'Nhaplai'}
                 placeholder={''}
                 value={data.nhaplai.value}
                 handleChange={changeValue('nhaplai')}
                 />
                </div>
              </div>
              <div className='name'>
                <p>Tên hiển thị</p>
                <div >
                <Input
                 name={'name'}
                 placeholder={''}
                 value={data.nhaplai.value}
                 handleChange={changeValue('name')}
                 />
                </div>
              </div>
              <div className='phone'>
                <p>Số Điện Thoại</p>
                <div >
                <Input
                 name={'Phone'}
                 placeholder={''}
                 value={data.nhaplai.value}
                 handleChange={changeValue('phone')}
                 />
                </div>
              </div>
              <div className='check'>
              <input type="checkbox" /><label>Tôi đã đọc kĩ và  đồng ý với điều khoản </label>
              </div>
              <div className='buton'>
              <Button text='Đăng Kí' handleClick={handleSubmit} />
              </div>
              
            </div>
        </div>
    </div>
    </div>
    
  )
}
