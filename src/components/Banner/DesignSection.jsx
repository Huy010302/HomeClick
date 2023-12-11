//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Design DesignSection cho Banner>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 
// 05/12/2023: chia nhỏ component Header- Huy Nguyen <nglehuycontactwork@gmail.com>
// 
import React from 'react';
import DesProduct from '../../assets/image/DesignProduct.png'
import DesLayout from '../../assets/image/DesignLayout.png'
import DesMixMatch from '../../assets/image/DesignMixMatch.png'


function DesignSection() {
  return (
    <div className='container-fluid design'>
    <div className="design-title">THIẾT KẾ</div>
    <ul className="design-list">
      <li className="design-item">
        <img className='design-item-img img-fluid' src={DesProduct} alt="Des" />
        <a href='true' className="design-item-title">THIẾT KẾ SẢN PHẨM</a>
      </li>
      <li className="design-item">
        <img className='design-item-img img-fluid' src={DesLayout} alt="Des" />
        <a href='true' className="design-item-title">THIẾT KẾ LAYOUT</a>
      </li>
      <li className="design-item">
        <img className='design-item-img img-fluid' src={DesMixMatch} alt="Des" />
        <a href='true' className="design-item-title">THIẾT KẾ MIX & MATCH</a>
      </li>
    </ul>
  </div>
  );
}

export default DesignSection;
