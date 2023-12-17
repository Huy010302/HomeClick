//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Viết Layout product>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 07/12/2023: viết phần Product cho ProductPage - Huy Nguyen <nglehuycontactwork@gmail.com>
// 
import React from "react";
import imgProductDetails1 from "../../assets/image/imgDetails.png"
import imgProductDetails2 from "../../assets/image/imgDetails2.png"
import imgProductDetails3 from "../../assets/image/imgDetails3.png"
import imgProductDetails4 from "../../assets/image/imgDetails4.png"
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const getImageSrc = (imgs) => {
    switch (imgs) {
        case "../../assets/image/imgDetails.png":
            return imgProductDetails1;
        case "../../assets/image/imgDetails2.png":
            return imgProductDetails2;
        case "../../assets/image/imgDetails3.png":
            return imgProductDetails3;
        case "../../assets/image/imgDetails4.png":
            return imgProductDetails4;
        default:
            return imgs;
    }
};

//Array
class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    // Fetch data from data-productdetails.json
    componentDidMount() {
        fetch("data-article.json")
            .then((response) => response.json())
            .then((products) => {
                console.log(products)
                this.setState({ products: products });
            });
    }
    // Render
    render() {
        const { products } = this.state;
        console.log(products)
        return (
            <>
                {/* <Container>
                    <h3 className="product-post">Mô tả sản phẩm</h3>
                    <Row>
                        {products.map((product) => (
                            <Link >
                                <Col md={3} key={product.code}>
                                    <ProductDetail image={getImageSrc(product.imgs)} title={product.title} price={product.price} isProductDetail={true} />
                                </Col>
                            </Link>
                        ))}
                    </Row>
                </Container> */}
            </>
        );
    }
}

export default ProductDetails;
