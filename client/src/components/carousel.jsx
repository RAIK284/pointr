import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import PropTypes from 'prop-types';
import './styles/carousel.css'

// reference: https://github.com/express-labs/pure-react-carousel
class Carousel extends React.Component {
    render() {
        return (
            <CarouselProvider
              naturalSlideWidth={this.props.width}
              naturalSlideHeight={this.props.height}
              totalSlides={this.props.numslides}
              isIntrinsicHeight={true}
            >
              <Slider>
                <Slide index={0}>
                    <img height={this.props.height} width={this.props.width} alt="Kachowski" src={this.props.image}/>
                </Slide>
                <Slide index={1}>I am the second Slide.</Slide>
              </Slider>
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        );
    }
  }

Carousel.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    numslides: PropTypes.number.isRequired,
    car: PropTypes.string.isRequired,
};

  export default Carousel;