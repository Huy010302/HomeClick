//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Design TopBanner cho Banner>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 
// 05/12/2023: chia nhỏ component Header- Huy Nguyen <nglehuycontactwork@gmail.com>
// 
import React from 'react';
import imgSearch from "../../assets/image/imgSearch.png";
import SearchBox from '../Header/SearchBox/SearchBox';

function TopBanner() {
    return (
        <>
            <div className="top-banner">
                <div className='top-banner-content d-flex'>
                    <div className="top-banner-text">Tham gia chương trình đối tác của Homeclick.</div>
                    <div className="text-decoration-underline">Tìm hiểu thêm</div>
                </div>
                <div className="icon-close"><button class="close-button">&#10006;</button></div>
            </div>
            <div className="col-3 search-box-md d-xs-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none  mx-auto m-2">
                <SearchBox className="search-box-md" label="Tìm kiếm" imgSrc={imgSearch} />
            </div>
        </>

    );
}

export default TopBanner;
