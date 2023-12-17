import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import imgButtonMenu from '../../../assets/image/imgButtonMenu.png'
import imgLogo from '../../../assets/image/imgLogo.png'
import icFaceBook from "../../../assets/image/icFacebook.png"
import icInstagram from "../../../assets/image/icInstagram.png"
import icPrintest from "../../../assets/image/icPrintest.png"
import icLinked from "../../../assets/image/icLinked.png"
import icYoutube from "../../../assets/image/icYoutube.png"
import imgSearch from "../../../assets/image/imgSearch.png"
import imgTruck from '../../../assets/image/imgTruck.png'
import imgUser from '../../../assets/image/imgUser.png'
import imgCart from '../../../assets/image/imgCart.png'
import SearchBox from '../SearchBox/SearchBox';


export default function HeaderMobile() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <div className="header-mobile d-flex flex-row align-items-center justify-content-around">
                <button className="btn btn-white mt-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    <img src={imgButtonMenu} alt="imgButtonMenu" />
                </button>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header d-flex flex-column">
                        <button type="button" class="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        <div class="offcanvas-img me-auto" id="offcanvasWithBothOptionsLabel">
                            <img src={imgLogo} alt="" />
                        </div>
                    </div>
                    <div class="offcanvas-body">
                        <nav className="">
                            <div className="menu">

                                <div className="">
                                    <ul className="navbar-nav me-auto mb-2 menu">
                                        <div className="dashed-line"></div>
                                        <li className="nav-item m-2">
                                            <Link to={"/"} className="nav-link nav" aria-current="page" href="true">TRANG CHỦ</Link>
                                        </li>
                                        <div className="dashed-line"></div>
                                        <li className="nav-item m-2">
                                            <Link to={"/product"} className="nav-link nav" href="true">
                                                SẢN PHẨM
                                            </Link>
                                        </li>
                                        <div className="dashed-line"></div>
                                        <li className="nav-item m-2">
                                            <a className="nav-link nav" aria-current="page" href="true">DỰ ÁN</a>
                                        </li>
                                        <div className="dashed-line"></div>
                                        <li className="nav-item m-2">
                                            <a className="nav-link nav" href="true">COMBO</a>
                                        </li>
                                        <div className="dashed-line"></div>
                                        <li className="nav-item m-2">
                                            <a className="nav-link nav" href="true">KHUYẾN MÃI</a>
                                        </li>
                                        <div className="dashed-line"></div>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="container-fluid nav-menu">
                            <ul className="menu-1 mt-4">
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
                        </div>
                        <div className="top-footer-icon">
                            <h5 style={{
                                fontFamily: "Roboto",
                                fontSize: "14px",
                                fontWeight: "400",
                                lineHeight: "16px",
                                letterSpacing: "0em",
                            }}>Theo dõi chúng tôi</h5>

                            <ul className="icon-list d-flex">
                                <li className="icon-item">
                                    <img className="img-fluid" src={icFaceBook} alt="icon-facebook" />
                                </li>
                                <li className="icon-item">
                                    <img className="img-fluid" src={icInstagram} alt="icon-Instagram" />
                                </li>
                                <li className="icon-item">
                                    <img className="img-fluid" src={icPrintest} alt="icon-Printest" />
                                </li>
                                <li className="icon-item">
                                    <img src={icLinked} alt="icon-Linked" />
                                </li>
                                <li className="icon-item">
                                    <img className="img-fluid" src={icYoutube} alt="icon-Youtube" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
                <Logo />
                <div className="search-box d-sm-none d-xxs-none d-xs-none d-md-none d-lg-block">
                    <SearchBox className="search-box" label="Tìm kiếm" imgSrc={imgSearch} />
                </div>
                <div className="icon-top">
                    <ul className="icon d-flex">
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
            </div>
        </>
    )
}