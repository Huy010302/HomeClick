//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Viết page Product>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 07/12/2023: Viết trang Product - Huy Nguyen <nglehuycontactwork@gmail.com>
// 
import React from 'react'
import Header from '../components/Header/Header/Header'
import ProductSeen from '../layouts/Product/ProductSeen';
import Footer from '../components/Footer/Footer';
import BackTopBtn from '../components/Button/ButtonToTop';
import ProductDetails from '../layouts/Product/ProductDetail';

export default function ProductDetailsPage() {
    return (
        <>
            <div className="product-details">
                <div className="header">
                    <Header />
                </div>
                <div className="details-container">
                    <ProductDetails/>
                </div>
                <div className="product2">
                    <ProductSeen />
                </div>
                <div className='back-to-top'>
                    <BackTopBtn />
                </div>
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </>
    )
}
