import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Login  from './Page/Login';
import  Register  from './Page/Register';
import Home from './Page/Home';
import "./index.css"
import Book from './Page/Book';
import Topicbook from './Page/Topicbook';
import { Listitem } from './containers/Home/Listitem';
import { Gioithieu } from './Page/Gioithieu';


import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});


const LandingPage = () => {
  return (
    <div className='containerlist'>
       <Listitem/>
    </div>
  );
};
const App = () => {
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/book/:id" element={<Book />}></Route>
            <Route path="/loaisach/:id" element={<Topicbook />}></Route>
            <Route path="/gioithieu" element={<Gioithieu/>}></Route>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
    </ApolloProvider>
  )
}

export default App