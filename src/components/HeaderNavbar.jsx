import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import BrandIcon from './BrandIcon';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HeaderNavbar = ({ navbarRef }) => {
  return (
    <header ref={navbarRef}>
      <Navbar expand='lg' className='bg-body-tertiary text-uppercase'>
        <Container className='text-uppercase'>
          <Navbar.Brand
            as={NavLink}
            to='/'
            className='d-flex align-items-center me-auto ms-auto  mt-1'
          >
            <BrandIcon></BrandIcon>
            <h1 className='fs-4'>Marisail</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-end '
          >
            <Nav className='me-0 text-uppercase'>
              <Nav.Link as={NavLink} to='/buy'>
                buy
              </Nav.Link>
              <Nav.Link as={NavLink} to='/sell'>
                sell
              </Nav.Link>
              <NavDropdown title='berths' id='basic-nav-dropdown'>
                <NavDropdown.Item
                  as={NavLink}
                  to='/berth'
                  className='text-capitalize'
                >
                  find a berth
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={NavLink}
                  to='/berth'
                  className='text-capitalize'
                >
                  advertise a berth
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='engines' id='basic-nav-dropdown'>
                <NavDropdown.Item
                  as={NavLink}
                  to='/engines'
                  className='text-capitalize'
                >
                  find an engine
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={NavLink}
                  to='/advert-engines'
                  className='text-capitalize'
                >
                  advertise an engine
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='transportation' id='basic-nav-dropdown'>
                <NavDropdown.Item
                  as={NavLink}
                  to='/engines'
                  className='text-capitalize'
                >
                  find transportation
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={NavLink}
                  to='/berth'
                  className='text-capitalize'
                >
                  request transportation
                </NavDropdown.Item>
              </NavDropdown>

              {/* <Nav.Link as={NavLink} to='/transport'>
                transportation
              </Nav.Link> */}
              <Nav.Link as={NavLink} to='/trailers'>
                trailers
              </Nav.Link>
              <Nav.Link as={NavLink} to='/chandlery'>
                chandlery
              </Nav.Link>

              {/* <NavDropdown title='chandlery' id='basic-nav-dropdown'>
                <NavDropdown.Item
                  as={NavLink}
                  to='/charter'
                  className='text-capitalize'
                >
                  find a charter
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={NavLink}
                  to='/charter'
                  className='text-capitalize'
                >
                  advertise a charter
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to='/berths'
                  className='text-capitalize'
                >
                  find a berth
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='#action/3.4'
                  className='text-capitalize'
                  as={NavLink}
                  to='/berths'
                >
                  advertise a berth
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to='/engines'
                  className='text-capitalize'
                >
                  find an engine
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to='/engines'
                  className='text-capitalize'
                >
                  advertise an engine
                </NavDropdown.Item>
                <NavDropdown.Item
                  href='#action/3.4'
                  className='text-capitalize'
                  as={NavLink}
                  to='/transport'
                >
                  find transportation
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to='/transport'
                  className='text-capitalize'
                >
                  request transportation
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link as={NavLink} to='/services'>
                services
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
HeaderNavbar.propTypes = {
  navbarRef: PropTypes.object,
};
export default HeaderNavbar;
