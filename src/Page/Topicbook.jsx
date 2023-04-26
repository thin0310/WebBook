import React from 'react'
import { useParams } from 'react-router-dom'
import { ContainerTopic } from '../containers/Topic';
const Topicbook = () => {
    const params = useParams();
  return <ContainerTopic id={params.id} />;
};
export default Topicbook
