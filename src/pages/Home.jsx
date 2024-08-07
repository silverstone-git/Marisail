import AppCarousel from '../components/AppCarousel';
import SponsorsRanking from '../components/Home/SponsorsRanking';

const Home = () => {
  return (
    <>
      <main
        style={{
          maxHeight: `100vh `,
          overflow: 'hidden',
        }}
      ></main>
      <section>
        <SponsorsRanking></SponsorsRanking>
      </section>
    </>
  );
};

Home.propTypes = {};

export default Home;
