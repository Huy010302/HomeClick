//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Viết component cho imgLogo>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 02/12/2023: viết component Clock cho phần ProductSale - Huy Nguyen <nglehuycontactwork@gmail.com>
// 
import React from 'react';
import '../../assets/scss/ProductSale/Clock.scss';

const Clock = ({ timeDays, timeHours, timeMinutes, timeSecond }) => (
    <>
        <div className='clock-container'>
            <div className='clock-item'>
                <span className='countdown mb-3'>{timeDays}</span>
                NGÀY
            </div>
            <div className='clock-item'>
                <span className='countdown mb-3'>{timeHours}</span> 
                GIỜ
            </div>
            <div className='clock-item'>
                <span className='countdown mb-3'>{timeMinutes}</span> 
                PHÚT
            </div>
            <div className='clock-item'>
                <span className='countdown mb-3'>{timeSecond}</span> 
                GIÂY
            </div>
        </div>
    </>
);

export default Clock;
