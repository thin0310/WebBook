import React from 'react'
import { Narbar } from '../narbar/Narbar'
import { Listitem } from './Listitem';
import { Header } from '../../components/Header/Header';
import { ListTopic } from '../../components/ListTopic';
import { Footer } from '../../components/Footer/Footer';
import "./Home.css"
import { Outlet } from "react-router-dom";

export const ContainerHome = () => {
  return (
    <div className='containerhome'>
      <Narbar />
      <Header/>
      <ListTopic/>
      <Outlet />
      <Footer/>
    </div>
  );
};
