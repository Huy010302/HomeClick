//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Viết Component TopMenu>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 25/11/2023: viết và hoàn thành Component TopMenu cho Header - Huy Nguyen <nglehuycontactwork@gmail.com>
// 

import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import imgTruck from '../../../assets/image/imgTruck.png'
import imgUser from '../../../assets/image/imgUser.png'
import imgCart from '../../../assets/image/imgCart.png'
import imgSearch from '../../../assets/image/imgSearch.png'

function TopMenu() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <header className="top-menu container-fluid d-flex d-none d-lg-flex">
                <nav className="container-fluid nav-menu">
                    <ul className="menu-1 list-unstyled d-flex ">
                        <li><a href="true" className="menu">
                            0936 900 319</a>
                        </li>
                        <li><a href="true" className="menu">
                            info@homeclick.vn</a>
                        </li>
                        <li><a href="true" className="menu">
                            Dịch vụ tư vấn</a>
                        </li>
                        <li><a href="true" className="menu">
                            Công cụ thiết kế 2D</a>
                        </li>
                        <li><a href="true" className="menu">
                            Báo giá</a>
                        </li>
                        <li><a href="true" className="menu">
                            Tin tức</a>
                        </li>
                    </ul>
                </nav>
                <div className="search-box">
                    <SearchBox className="search-box" label="Tìm kiếm" imgSrc={imgSearch} />
                </div>
                <div className="icon-top">
                    <ul className="icon d-flex list-unstyled">
                        <li><img className="icon-item img-fluid" src={imgTruck} alt="Truck" /></li>
                        <li style={{ position: "relative" }} >
                            <img className="icon-item img-fluid" src={imgUser} alt="User"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)} />
                            {isHovered && (
                                <div className="login-registration">
                                    <ul className="">
                                        <li>ĐĂNG KÝ</li>
                                        <div className="dashed-line"></div>
                                        <li>ĐĂNG NHẬP</li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li ><img className="icon-item img-fluid" src={imgCart} alt="Cart" /></li>
                    </ul>
                </div>

            </header>
            <div className="dashed-line d-none d-lg-flex"></div>
        </>
    )
}

export default TopMenu