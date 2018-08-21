import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                    },
                },
                {
                    breakpoint: 350,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <div className="container my-5" id="HomeCarousel">
                <Slider {...settings}>
                    <div>
                        <img className="img-fluid" src="https://source.unsplash.com/random/1280x800" alt="" />
                    </div>
                    <div>
                        <img className="img-fluid" src="https://source.unsplash.com/random/1280x800" alt="" />
                    </div>
                    <div>
                        <img className="img-fluid" src="https://source.unsplash.com/random/1280x800" alt="" />
                    </div>
                    <div>
                        <img className="img-fluid" src="https://source.unsplash.com/random/1280x800" alt="" />
                    </div>
                    <div>
                        <img className="img-fluid" src="https://source.unsplash.com/random/1280x800" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}
