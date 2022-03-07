import React from 'react';
import "./UserHome.css";
import { Link } from 'react-router-dom';

function UserHome(props) {
    return (
        <div className='userHome'>

            {/* Header */}
            <div className='userHomeHeader'>
                <h1>Welcome to SleekCVs!</h1>
            </div>
            <br /><br />

            {/* Home Intro */}
            <div className='userPara'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            {/* Carousel */}
            <div className='userCarousel'>
                <section class="carousel" aria-label="Gallery">
                    <ol class="carousel__viewport">
                        <li id="carousel__slide1"
                            tabindex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper">
                                <a href="#carousel__slide4"
                                    class="carousel__prev">Go to last slide</a>
                                <a href="#carousel__slide2"
                                    class="carousel__next">Go to next slide</a>
                            </div>
                        </li>
                        <li id="carousel__slide2"
                            tabindex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                            <a href="#carousel__slide1"
                                class="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide3"
                                class="carousel__next">Go to next slide</a>
                        </li>
                        <li id="carousel__slide3"
                            tabindex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                            <a href="#carousel__slide2"
                                class="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide4"
                                class="carousel__next">Go to next slide</a>
                        </li>
                        <li id="carousel__slide4"
                            tabindex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                            <a href="#carousel__slide3"
                                class="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide1"
                                class="carousel__next">Go to first slide</a>
                        </li>
                    </ol>
                    <aside class="carousel__navigation">
                        <ol class="carousel__navigation-list">
                            <li class="carousel__navigation-item">
                                <a href="#carousel__slide1"
                                    class="carousel__navigation-button">Go to slide 1</a>
                            </li>
                            <li class="carousel__navigation-item">
                                <a href="#carousel__slide2"
                                    class="carousel__navigation-button">Go to slide 2</a>
                            </li>
                            <li class="carousel__navigation-item">
                                <a href="#carousel__slide3"
                                    class="carousel__navigation-button">Go to slide 3</a>
                            </li>
                            <li class="carousel__navigation-item">
                                <a href="#carousel__slide4"
                                    class="carousel__navigation-button">Go to slide 4</a>
                            </li>
                        </ol>
                    </aside>
                </section>
            </div>
            {/* End of Carousel */}
            <br /><br />

            {/* button */}
            <div className='userHomeBtn'>
                <Link to='/form' className='btnText'><button> Create Resume</button></Link>
            </div >
            <br /><br /><br /><br />

        </div >
    );
}

export default UserHome;