import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import PropTypes from 'prop-types';
import './styles/carousel.css'

// reference: https://github.com/express-labs/pure-react-carousel
class Carousel extends React.Component {

    render() {

      const images = this.props.images
        return (
            <CarouselProvider
              naturalSlideWidth={this.props.width}
              naturalSlideHeight={this.props.height}
              totalSlides={this.props.numslides}
              isIntrinsicHeight={true}
              visibleSlides={this.props.visibleSlides}
              step={1}
            >
              <Slider>
                <div classname="slider">
                  {
                  images.map((image,index) =>
                    <Slide index={index} classname="img">
                      <img 
                      height={this.props.height} 
                      width={this.props.width} 
                      alt="Kachowski"
                      className="img" 
                      src={image}
                      />
                    </Slide>
                  )
                  }
                </div>
                
                {/* <Slide index={0}>
                    <img 
                    height={this.props.height} 
                    width={this.props.width} 
                    alt="Kachowski" 
                    src={this.props.images[0]}/>
                </Slide>
                <Slide index={1}>
                <img 
                    height={this.props.height} 
                    width={this.props.width} 
                    alt="Kachowski" 
                    src={this.props.images[1]}/>
                </Slide> */}
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
    images: PropTypes.array.isRequired,
    visibleslides: PropTypes.number.isRequired,
};

  export default Carousel;