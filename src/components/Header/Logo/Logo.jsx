//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Viết Component Logo>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 25/11/2023: viết và hoàn thành Component Logo cho Header - Huy Nguyen <nglehuycontactwork@gmail.com>
// 
import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../../assets/image/imgLogo.png"


function Logo() {
  
  return (
    <div className="">
      <Link to="/#">
          <img className="logo img-fluid"src={imgLogo} alt ="Logo"/>
      </Link>
    </div>
  )
}

export default Logo