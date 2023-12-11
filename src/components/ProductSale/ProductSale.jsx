//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Viết component cho ProductSale>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 30/11/2023: viết component ProductSale - Huy Nguyen <nglehuycontactwork@gmail.com>
// 02/12/2023: thêm Clock vào ProductSale - Huy Nguyen <nglehuycontactwork@gmail.com>
// 04/12/2023: thêm Button vào ProductSale - Huy Nguyen <nglehuycontactwork@gmail.com>

import React, { useState, useEffect } from 'react';
import imgProductSale from '../../assets/image/ProductSale.png';
import Clock from './Clock';


const ProductSale = () => {
  const [timeDays, setTimerDays] = useState(0);
  const [timeHours, setTimerHours] = useState(0);
  const [timeMinutes, setTimerMinutes] = useState(0);
  const [timeSecond, setTimerSeconds] = useState(0);

  useEffect(() => {
    const countdownDate = new Date('2023-12-27T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <>
      <div className="product-sale container-fluid d-flex">
        <div className="">
          <img className="product-img img-fluid" src={imgProductSale} alt="ProductSale" />
        </div>
        <div className="product-content">
          <div className="product-title">KHUYẾN MÃI ĐẶC BIỆT</div>
          <div className="product-name">HEXCO CHAIR</div>
          <div className="product-script">
            Chương trình mua chung với giá ưu đãi, được bắt đầu từ ngày <b>19/12</b> đến <b>25/12/2021</b>. Với giá giảm <b>50%</b>.<br />
            Dành cho <b>50 đơn mua chung đầu tiên!</b>
          </div>
          <div className="clock-countdown">
            <Clock timeDays={timeDays} timeHours={timeHours} timeMinutes={timeMinutes} timeSecond={timeSecond} />
          </div>
            <button className='button-product-sale'>MUA NGAY</button>
        </div>
      </div>
    </>
  );
};

export default ProductSale;
