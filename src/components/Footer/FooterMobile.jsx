import React from "react";
import img_BCT from '../../assets/image/img_BCT.png';
import Button from "../Button/Button";
import imgArrowRight from "../../assets/image/imgArrowRight.png"

function FooterMobile() {
    <>
            <footer className="mobile-footer container-fluid d-lg-none p-3">
                <div className="row footer-tree">
                    <div className="footer-item">
                        <div className="title dropdown-trigger">
                            <a href="#" className="option-text">THÔNG TIN CÔNG TY</a>
                            <img src={imgArrowRight} alt srcSet />
                        </div>
                        <ul className="options container-fluid list-unstyled text-decoration-none options-list active">
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
                        <ul class="options container-fluid  options-list d-flex justify-content-center">
                            <li className="footer-item">
                                <Button className="button-footer" label="Đăng ký cộng tác viên" />
                            </li>
                            <li className="footer-item">
                                <Button className="button-footer" label="Đăng nhập cộng tác viên" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 bg-white">
                        homeclick.vn - Trang mua sắm chuyên ngành NỘI THẤT
                        © 2021 Công Ty TNHH DB Group
                        GPDKKD số 0314299260 do sở KHĐT Tp. Hồ Chí Minh cấp 21/03/2017
                        Đăng ký trụ sở chính: 68 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.Hồ Chí Minh - Điện thoại: 0936 900 319 - Email: info@homeclick.vn
                    </div>
                    <div className="col-5">
                        <img className="img-fluid" src={img_BCT} alt="imgBCT" />
                    </div>
                </div>
            </footer>
    </>
}

export default FooterMobile;