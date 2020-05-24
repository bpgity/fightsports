import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
//import CarouselImg1 from '../../../assets/images/img3.jpg';
//import CarouselImg2 from '../../../assets/images/img4.jpg';

class DemoCarousel extends Component {
  state = {
    carImgArray: [
      {
        img:
          'https://cdn.pixabay.com/photo/2020/05/18/21/21/manege-5188459__480.jpg',
        type: 'salad',
      },
      {
        img:
          'https://cdn.pixabay.com/photo/2020/04/30/20/50/sky-5114561__480.jpg',
        type: 'bacon',
      },
      {
        img:
          'https://cdn.pixabay.com/photo/2020/04/30/20/50/sky-5114561__480.jpg',
        type: 'cheese',
      },
      {
        img:
          'https://cdn.pixabay.com/photo/2020/05/18/21/21/manege-5188459__480.jpg',
        type: 'meat',
      },
    ],
  };

  render() {
    return (
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showArrows={false}
        dynamicHeight={true}
      >
        {this.state.carImgArray.map((item, i) => {
          return (
            <div>
              <img src={item.img} />
            </div>
          );
        })}
      </Carousel>
    );
  }
}

export default DemoCarousel;
