import AppCarousel from '../components/AppCarousel';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SponsorsRanking from '../components/Home/SponsorsRanking';

const Home = () => {
  const [message, setMessage] = useState('');
  const [sponsors, setSponsors] = useState({ ok: false, result: [] });
  useEffect(() => {
    axios
      .get('http://localhost:3001/sponsors')
      .then((response) => {
        console.log('001 Response from API--', response);
        setMessage(response);
        return response.data;
      })
      .then((data) => setSponsors(data))
      .catch((error) => {
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
      ></main>
      <section>
        <SponsorsRanking {...{ sponsors }}></SponsorsRanking>
      </section>
    </>
  );
};

Home.propTypes = {};

export default Home;
