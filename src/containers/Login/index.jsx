import React,{ useState } from 'react';
import { Button } from '../../components/Buton';
import { Input } from "../../components/Input";
import "./indexinput.css";
export const FormLogin = () => {
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
    },
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

  const checkPassword = () => {
    const  password  = data.password.value
    if ( password.length < 6){
      console.log('Mat khau qua ngan')
      setData({
        ...data,
        password :{
          ...data.password,
          isError : true ,
          message : "Mat khau phai tren 6 ki tu"
        }
      })
    }
  }

  // Phân hiển thị
  return (
  <div className='containerpageinput'>
    <div className='containerinput'>
      <div className='inputfrom'>
         <h2> LOGIN </h2>
         <form className='fromlogin'>
          <div className='formloginemail'>
           <p>Email</p>
           <Input
            name={'email'}
            placeholder={'Email...'}
            value={data.email.value}
            handleChange={changeValue('email')}
           />
          </div>
          <div className='formloginpassword'>
          <p>Password</p>
           <Input
           name={'password'}
           placeholder={'********'}
           type={'password'}
           value={data.password.value}
           handleChange={changeValue('password')}
           handleBlur={checkPassword}
          />
          </div>
          <div className='Saveacountres'>
          <input type="checkbox"  />
          <label > Nhớ tài khoản của tôi </label>
          </div>
          <div className='submit'>
          <Button text='Login' handleClick={handleSubmit} />
          </div>
    </form>
      </div> 

    </div>
    </div>
  );
};