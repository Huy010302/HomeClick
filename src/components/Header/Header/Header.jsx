//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Design Header cho website HomeClick>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 25/11/2023: viết component Header - Huy Nguyen <nglehuycontactwork@gmail.com>
// 

import React from "react";
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";
import TopMenu from "../TopMenu/TopMenu";
import SearchBox from "../SearchBox/SearchBox";
import imgTruck from '../../../assets/image/imgTruck.png'
import imgUser from '../../../assets/image/imgUser.png'
import imgCart from '../../../assets/image/imgCart.png'
import imgSearch from '../../../assets/image/imgSearch.png'
import imgButtonMenu from '../../../assets/image/imgButtonMenu.png'



function Header() {
  return (
    <>
      {/* Header-PC */}
      <header className="container-fluid bg-white d-none d-xl-block">
        <div className="flex justify-around items-center flex-row container mx-auto py-2">
          <TopMenu />
          <div className="d-flex container-fluid nav-menu">
            <Logo />
            <NavMenu />
          </div>
        </div>
      </header>
      {/* Header-Mobile */}
      <header className="d-block d-xl-none">
        <nav className="navbar bg-white">
          <div className="container-fluid g-4 nav-bar-mobile">
            <div className="col-1">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img className="button-menu" src={imgButtonMenu} />
              </button>
            </div>
            <div className="col-3 img-logo">
              <Logo />
            </div>
            <div className="col-3 search-box d-none d-lg-block">
              <SearchBox className="search-box" label="Tìm kiếm" imgSrc={imgSearch} />
            </div>
            <div >
              <ul className="col-1 icon d-flex my-auto">
                <li><img className="icon-item" src={imgTruck} alt="Truck" /></li>
                <li><img className="icon-item" src={imgUser} alt="User" /></li>
                <li><img className="icon-item" src={imgCart} alt="Cart" /></li>
              </ul>
            </div>

          </div>



        </nav>
      </header>

    </>
  );
}

export default Header;
