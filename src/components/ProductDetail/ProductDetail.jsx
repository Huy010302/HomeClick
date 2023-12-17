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


function ProductDetail(data) {
    const { image, title, sku, price, isProductDetail = false } = data;
    return (
        <>
            <div className="item d-flex flex-column justify-content-center text-center">
                <div className="image" style={{
                    backgroundColor: isProductDetail ? "#EFEFEF" : null,
                    width: isProductDetail ? "712px" : null,
                    height: isProductDetail ? "454px" : null,
                }}>
                    <img className="img-fluid" src={image} alt="image" />
                </div>

                <div className="content">
                    <div className="title justify-content-center">{title}</div>
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

export default ProductDetail;