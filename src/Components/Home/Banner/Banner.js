import React from 'react';
import style from "./Banner.module.css"

const Banner = () => {
    return (
        <div className='pb-5'>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img className={style.banner} src="https://i.pinimg.com/originals/ca/e7/2c/cae72ce86998abcadd5051acd91a696b.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img className={style.banner} src="https://dzs.com/wp-content/uploads/2016/03/laptop-banner.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img className={style.banner} src="https://dzs.com/wp-content/uploads/2016/03/laptop-banner.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;