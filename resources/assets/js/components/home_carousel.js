import React, { Component } from 'react';
import Slider from 'react-slick';
import LatestPost from './latest_post';
import Showcase from './showcase';
import BandShow from './band_show';

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
            <div className="m-5" id="HomeCarousel">
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
                            <BandShow bandID={4} />
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
