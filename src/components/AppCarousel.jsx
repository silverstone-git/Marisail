import { Carousel, Image } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import {
  carouselStyles,
  carouselItem,
  carouselImg,
} from './appCarousel.module.scss';
const AppCarousel = () => {
  return (
    <Carousel className={`${carouselStyles}`} fade interval={null}>
      <Carousel.Item className={`${carouselItem}`}>
        <Image
          className={carouselImg}
          src='images/slider-sailboat.jpg'
          text='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={`${carouselItem}`}>
        <Image
          className={carouselImg}
          src='images/slider-sailboat-1.jpg'
          text='Second slide'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={`${carouselItem}`}>
        <Image
          className={carouselImg}
          src='images/slider-sailboat-3.jpg'
          text='Third slide'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
AppCarousel.propTypes = {
  navbarRef: PropTypes.object,
};
export default AppCarousel;
