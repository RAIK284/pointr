import React from 'react';
import { CarouselProvider, Slider} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import PropTypes from 'prop-types';
import './styles/carousel.css'

// reference: https://github.com/express-labs/pure-react-carousel
class Carousel extends React.Component {

    render() {

      const images = this.props.images
        return (
            <div id={"carousel-wrapper"}>
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
                                    <Slider index={index} classname="img">
                                        <img
                                            height={this.props.height}
                                            width={this.props.width}
                                            alt="Kachowski"
                                            className="img"
                                            src={image}
                                        />
                                    </Slider>
                                )
                            }
                        </div>
                    </Slider>
                </CarouselProvider>
            </div>
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