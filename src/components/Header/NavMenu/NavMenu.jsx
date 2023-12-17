//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Viết Component NavMenu>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 25/11/2023: viết và hoàn thành Component NavMenu cho Header - Huy Nguyen <nglehuycontactwork@gmail.com>
// 
import React from "react";
import { Link } from "react-router-dom";
import imgButtonMenu from "../../../assets/image/imgButtonMenu.png"


function NavMenu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="menu">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu">
              <li className="nav-item mx-2">
                <Link to={"/"} className="nav-link nav" aria-current="page" href="true">TRANG CHỦ</Link>
              </li>
              <li className="nav-item dropdown mx-2">
                <Link to = {"/product"} className="nav-link dropdown-toggle nav" href= "true" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SẢN PHẨM
                </Link>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item nav" href="true">Cho nam</a></li>
                  <li><a className="dropdown-item nav" href="true">Cho nữ</a></li>
                  <li><a className="dropdown-item nav" href="true">Outlet sale</a></li>
                </ul>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link nav" aria-current="page" href="true">DỰ ÁN</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link nav" href="true">COMBO</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link nav" href="true">KHUYẾN MÃI</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}

export default NavMenu;