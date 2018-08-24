import React, { Component } from 'react';
import Slider from 'react-slick';
import LatestPost from './post_latest';
import Showcase from './showcase';
import BandSpotlight from './band_spotlight';

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay:true,
            autoplaySpeed:5000,
            pauseOnHover:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows:true
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 0,
                        dots: true,
                        arrows:false
                    },
                },
                {
                    breakpoint: 350,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows:false
                    },
                },
            ],
        };
        return (
            <div id="HomeCarousel">
                <Slider {...settings}>
                    <div>
                        <Showcase />
                    </div>
                    <div>
                        <div className="container">
                            <div className="h1 text-white">The Latest News...</div>
                            <LatestPost latestPost={this.props.latestPost} />
                        </div>
                    </div>
                    <div>
                        <div className="container">
                            <div className="h1 text-white">Band Spotlight</div>
                            <BandSpotlight bandID={4} />
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
