import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';

const SponsorsRanking = ({ sponsors }) => {
  /* const fetchSponsors = async (URL = 'http://localhost:3001/sponsors') => {
    try {
      const res = await fetch(URL);
      const toJson = await res.json();
      setSponsors(toJson);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSponsors();
  }, []); */

  return (
    <Container
      className='py-4'
      style={{
        display: 'grid',
        gridTemplateColumns: ' repeat( auto-fill, minmax(180px, 1fr) )',
      }}
    >
      {sponsors.ok &&
        sponsors.result.map((el, i) => (
          <Card key={i} className='text-center py-2'>
            {el.company_name}
          </Card>
        ))}
    </Container>
  );
};
SponsorsRanking.propTypes = {
  sponsors: PropTypes.object.isRequired,
};

export default SponsorsRanking;
