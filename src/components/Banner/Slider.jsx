//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Design Slider cho Banner>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 
// 05/12/2023: chia nhỏ component Header- Huy Nguyen <nglehuycontactwork@gmail.com>
// 
import React from "react";
import Banner1 from "../../assets/image/BannerHeader1.png"
import Banner2 from "../../assets/image/BannerHeader2.png"

function Slider() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Banner1} className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                    <img src={Banner2} className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src={Banner1} className="d-block w-100" alt="Slide 3" />
                </div>
            </div>
        </div>
    )
}

export default Slider;