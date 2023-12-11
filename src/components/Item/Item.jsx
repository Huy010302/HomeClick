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
// 05/12/2023: viết lại component item, tối ưu từ 2 component Aricle và C
// 
// 
import React from "react";


function Item(data) {
    const { image, title, date, sku, price, isProductList = false } = data;
    return (
        <>
            <div className="item d-flex flex-column justify-content-center text-center">
                <div className="image" style={{
                    backgroundColor: isProductList ? "#EFEFEF" : null,
                    width: isProductList ? "276px" : null,
                    height: isProductList ? "211px" : null,
                }}>
                    <img className="img-fluid" src={image} alt="image" />
                </div>

                <div className="content">
                    <div className="title">{title}</div>
                    {
                        date &&
                        <div className="date">{date}</div>
                    }
                    {
                        sku &&
                        <div className="sku">{sku}</div>
                    }
                    {
                        price &&
                        <div className="price">{price}</div>
                    }
                </div>
            </div >

        </>
    )

}

export default Item;