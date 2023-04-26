import React from 'react'
import { useState } from 'react';
import { Listtopicitem } from './Listtopicitem';
import { useEffect } from "react";

export const ContainerTopic = (props) => {
    const [id, setId]= useState(props.id)

    useEffect(() => {
      setId(props.id);
    }, [props]);
  return (
    <div className='container'>
        <div className='containerlist'>
            <Listtopicitem id ={id}/>
        </div>
    </div>
  )
}
