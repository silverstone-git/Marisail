import AppCarousel from '../components/AppCarousel';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('http://localhost:3001/sponsors')
      .then(response => {
        console.log("001 Response from API--",response);
        setMessage(response);
      })
      .catch(error => {
        console.error('There was an error fetching the message!', error);
      });
  }, []);
  return (
    <>
    <main
      style={{
        maxHeight: `100vh `,
        overflow: 'hidden',
      }}
    >
      <AppCarousel/>
    </main>
    </>
  );
};

Home.propTypes = {};

export default Home;  