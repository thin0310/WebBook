import React from 'react'
import { ContainerBook } from '../containers/Book/ContainerBook'
import { useParams } from 'react-router-dom'
const Book = () => {
  const params = useParams()
  return <ContainerBook id={params.id}/>;
};

export default Book