// Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Viết Component Footer>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 25/11/2023: viết Component Footer cho HomePage - Huy Nguyen <nglehuycontactwork@gmail.com>
// 04/12/2023: thêm component Button và Foter
// 05/12/2023: viết thêm phần TopFooter

import React, { useState } from "react";
import imgLogo from '../../assets/image/imgLogo-1.png';
import img_BCT from '../../assets/image/img_BCT.png';
import icFaceBook from '../../assets/image/icFacebook.png'
import icPrintest from '../../assets/image/icPrintest.png'
import icInstagram from '../../assets/image/icInstagram.png'
import icLinked from '../../assets/image/icLinked.png'
import icYoutube from '../../assets/image/icYoutube.png'
import Button from "../Button/Button";
import SearchBox from "../Header/SearchBox/SearchBox";
import imgArrowRight from "../../assets/image/imgArrowRight.png";
import FooterMobile from "./FooterMobile";

function Footer() {
    const [areOptionsVisible, setAreOptionsVisible] = useState(false);

    const toggleOptions = () => {
        setAreOptionsVisible(!areOptionsVisible);
    };



    return (
        <>
            <div className="container-fluid top-footer">
                <div className="top-footer-content d-flex">
                    ĐĂNG KÝ NHẬN KHUYẾN MÃI
                    <div className="input-email">
                        <SearchBox className="email-box" label="Email của bạn" imgSrc={imgArrowRight} />
                    </div>
                </div>

                <div className="top-footer-icon">
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
            {/* Footer PC */}
            <footer className="footer container-fluid d-none d-lg-block">
                <div className="row">
                    <div className="img-footer">
                        <img src={imgLogo} alt="imgLogo" />
                    </div>
                </div>

                <div className="row d-flex nav-menu">
                    <div className="col-2">
                        <div className="footer-title">THÔNG TIN CÔNG TY</div>
                        <ul className="footer-list">
                            <li className="footer-item">Giới thiệu</li>
                            <li className="footer-item">Tuyển dụng</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <div className="footer-title">HỖ TRỢ KHÁCH HÀNG</div>
                        <ul className="footer-list">
                            <li className="footer-item">Hướng dẫn mua hàng</li>
                            <li className="footer-item">Hướng dẫn thanh toán</li>
                            <li className="footer-item">Chính sách khách hàng thân thiết</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <div className="footer-title">CHÍNH SÁCH BÁN HÀNG</div>
                        <ul className="footer-list">
                            <li className="footer-item">Điều khoản sử dụng</li>
                            <li className="footer-item">Chính sách đổi,trả & bảo hành</li>
                            <li className="footer-item">Chính sách giao hàng</li>
                            <li className="footer-item">Chính sách bảo mật</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <div className="footer-title">LIÊN HỆ</div>
                        <ul className="footer-list">
                            <li className="footer-item">25/6A Nhị Bình 2, Nhị Bình,<br />Hóc Môn, Tp. Hồ Chí Minh</li>
                            <li className="footer-item">info@homeclick.vn</li>
                        </ul>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center">
                        <div className="footer-title">CỘNG TÁC VIÊN</div>
                        <ul class="footer-list">
                            <li className="footer-item">
                                <Button className="button-footer" label="Đăng ký cộng tác viên" />
                            </li>
                            <li className="footer-item">
                                <Button className="button-footer" label="Đăng nhập cộng tác viên" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <div className="footer-title">HOTLINE</div>
                        <ul className="footer-list">
                            <li className="footer-item">
                                0936 900 319
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="container bottom-footer">
                        <div className="col-6">
                            <ul className="bottom-footer-item">
                                <li>homeclick.vn - Trang mua sắm chuyên ngành NỘI THẤT</li>
                                <li>© 2021 Công Ty TNHH DB Group GPDKKD số 0314299260 do sở KHĐT Tp. Hồ Chí Minh cấp 21/03/2017 Đăng ký trụ sở chính: 68 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.Hồ Chí Minh - Điện thoại: 0936 900 319 - Email: info@homeclick.vn</li>
                            </ul>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <img className="img-fluid" src={img_BCT} alt="imgBCT" />
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Mobile */}
            <footer className="mobile-footer container-fluid d-lg-none p-3">
                <div className="row footer-tree">
                    <div className="footer-item">
                        <div className={`title dropdown-trigger ${areOptionsVisible ? 'active' : ''}`} onClick={toggleOptions}>
                            <a href="#" className="option-text">THÔNG TIN CÔNG TY</a>
                            <img src={imgArrowRight} alt srcSet />
                        </div>
                        <ul className="options container-fluid list-unstyled text-decoration-none">
                            <li className="option">
                                <a href="#" className="option-text">Giới thiệu</a>
                            </li>
                            <li className="option">
                                <a href="#" className="option-text">Tuyển dụng</a>
                            </li>
                        </ul>
                    </div>
                    <div className="dashed-line" />
                    <div className="footer-item">
                        <div className="title dropdown-trigger">
                            <a href="#" className="option-text">HỖ TRỢ KHÁCH HÀNG</a>
                            <img src={imgArrowRight} alt srcSet />
                        </div>
                        <ul className="options container-fluid list-unstyled text-decoration-none options-list">
                            <li className="option">
                                <a href="#" className="option-text">Hướng dẫn mua hàng</a>
                            </li>
                            <li className="option">
                                <a href="#" className="option-text">Hướng dẫn thanh toán</a>
                            </li>
                            <li className="option">
                                <a href="#" className="option-text">Chính sách khách hàng thân thiết</a>
                            </li>
                        </ul>
                    </div>
                    <div className="dashed-line" />
                    <div className="footer-item">
                        <div className="title dropdown-trigger">
                            <a href="#" className="option-text">CHÍNH SÁCH BÁN HÀNG</a>
                            <img src={imgArrowRight} alt srcSet />
                        </div>
                        <ul className="options container-fluid list-unstyled text-decoration-none options-list">
                            <li className="option">
                                <a href="#" className="option-text">Điều khoản sử dụng</a>
                            </li>
                            <li className="option">
                                <a href="#" className="option-text">Chính sách đổi, trả & bảo hành</a>
                            </li>
                            <li className="option">
                                <a href="#" className="option-text">Chính sách giao hàng</a>
                            </li>
                            <li className="option">
                                <a href="#" className="option-text">Chính sách bảo mật</a>
                            </li>
                        </ul>
                    </div>
                    <div className="dashed-line" />
                    <div className="footer-item">
                        <div className="title dropdown-trigger">
                            <a href="#" className="option-text">LIÊN HỆ</a>
                            <img src={imgArrowRight} alt srcSet />
                        </div>
                        <ul className="options container-fluid list-unstyled text-decoration-none options-list">
                            <li className="option">
                                <a href="#" className="option-text">25/6A Nhị Bình 2, Nhị Bình,<br />Hóc Môn, Tp. Hồ Chí Minh</a>
                            </li>
                            <li className="option">
                                <a href="#" className="option-text">info@homeclick.vn</a>
                            </li>
                        </ul>
                    </div>
                    <div className="dashed-line" />
                    <div className="footer-item">
                        <div className="title dropdown-trigger">
                            <a href="#" className="option-text">CỘNG TÁC VIÊN</a>
                        </div>
                        <ul className="options container-fluid d-flex justify-content-center options-list button-footer">
                            <li className="footer-item d-flex align-items-center">
                                <Button className="button-footer" label="Đăng ký cộng tác viên" />
                            </li>
                            <li className="footer-item">
                                <Button className="button-footer" label="Đăng nhập cộng tác viên" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row pt-5 d-flex bottom-footer-container">
                    <div className="col-md-6 bottom-footer">
                        <ul className="bottom-footer-item">
                            <li className="mb-3">
                                homeclick.vn - Trang mua sắm chuyên ngành NỘI THẤT
                            </li>
                            <li>
                                © 2021 Công Ty TNHH DB Group GPDKKD số 0314299260 do sở KHĐT Tp. Hồ Chí Minh cấp 21/03/2017 <br/>
                                Đăng ký trụ sở chính: 68 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.Hồ Chí Minh - Điện thoại: 0936 900 319 - Email: info@homeclick.vn
                            </li>
                        </ul>


                    </div>
                    <div className="col-6 ms-auto">
                        <img className="img-fluid" src={img_BCT} alt="imgBCT" />
                    </div>
                </div>
            </footer>
            <FooterMobile />
        </>
    )
}
export default Footer;
