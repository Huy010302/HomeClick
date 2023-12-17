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

import React, { useState } from "react";
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";
import TopMenu from "../TopMenu/TopMenu";
import HeaderMobile from "./HeaderMobile";



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
      {/* HeaderMobile */}
      <header className="container-fluid d-xl-none">
        <HeaderMobile />
      </header>

    </>
  );
}

export default Header;
