import { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const SponsorsRanking = () => {
  const [sponsors, setSponsors] = useState({ ok: false, result: [] });
  /* const fetchSponsors = async (URL = 'http://localhost:3001/api/home/sponsors') => {
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
    <Container className='py-4'>
      <Row>
        {/*  {sponsors.ok &&
          sponsors.result.map((el, i) => (
            <Col className={'col col-2 mb-3'} key={i}>
              <Card className='text-center py-2'>{el.company_name}</Card>
            </Col>
          ))} */}
        <Col className={'col col-2 mb-3'}>
          <Card className='text-center py-2'>'sponsors here'</Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SponsorsRanking;
