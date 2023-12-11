//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Design Banner cho trang HomePage>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 26/11/2023: viết component Banner cho HomePage - Huy Nguyen <nglehuycontactwork@gmail.com>
// 27/11/2023: viết phần slider cho Banner - Huy Nguyen <nglehuycontactwork@gmail.com>
// 
import React from 'react';
import Slider from './Slider';
import TopBanner from './TopBanner';
import DesignSection from './DesignSection';

function BannerSlider() {
  return (
    <>
      <div className="banner m-0">
        <TopBanner />
        <Slider />
        <DesignSection />
      </div>
    </>
  );
};

export default BannerSlider;
