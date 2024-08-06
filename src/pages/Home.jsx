import AppCarousel from '../Components/AppCarousel';

const Home = () => {
  return (
    <main
      style={{
        maxHeight: `100vh `,
        overflow: 'hidden',
      }}
    >
      <AppCarousel></AppCarousel>
    </main>
  );
};

Home.propTypes = {};

export default Home;
