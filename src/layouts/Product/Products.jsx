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
import ImgSofa1 from "../../assets/image/imgSofa1.png"
import ImgSofa2 from "../../assets/image/imgSofa2.png"
import ImgSofa3 from "../../assets/image/imgSofa3.png"
import ImgSofa4 from "../../assets/image/imgSofa4.png"
import ImgSofa5 from "../../assets/image/imgSofa5.png"
import ImgSofa6 from "../../assets/image/imgSofa6.png"
import ImgSofa7 from "../../assets/image/imgSofa7.png"
import ImgSofa8 from "../../assets/image/imgSofa8.png"
import ImgSofa9 from "../../assets/image/imgSofa9.png"
import ImgSofa10 from "../../assets/image/imgSofa3.png"
import ImgSofa11 from "../../assets/image/imgSofa2.png"
import ImgSofa12 from "../../assets/image/imgSofa10.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from "../../components/Item/Item"
import Button from "../../components/Button/Button";
import FilterProduct from "../../components/FilterProduct/FilterProduct";
import { Link } from "react-router-dom";

const getImageSrc = (img) => {
    switch (img) {
        case "../../assets/image/imgSofa1.png":
            return ImgSofa1;
        case "../../assets/image/imgSofa2.png":
            return ImgSofa2;
        case "../../assets/image/imgSofa3.png":
            return ImgSofa3;
        case "../../assets/image/imgSofa4.png":
            return ImgSofa4;
        case "../../assets/image/imgSofa5.png":
            return ImgSofa5;
        case "../../assets/image/imgSofa6.png":
            return ImgSofa6;
        case "../../assets/image/imgSofa7.png":
            return ImgSofa7;
        case "../../assets/image/imgSofa8.png":
            return ImgSofa8;
        case "../../assets/image/imgSofa9.png":
            return ImgSofa9;
        case "../../assets/image/imgSofa3.png":
            return ImgSofa10;
        case "../../assets/image/imgSofa2.png":
            return ImgSofa11;
        case "../../assets/image/imgSofa10.png":
            return ImgSofa12;
        default:
            return img;
    }
};

//Array
class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    // Fetch data from data-product1.json
    componentDidMount() {
        fetch("data-product1.json")
            .then((response) => response.json())
            .then((products) => {
                this.setState({ products: products });
            });
    }
    // Render
    render() {
        const { products } = this.state;
        console.log(products)
        return (
            <>
                <Container>
                    <h3 className="product-post">PHÒNG KHÁCH</h3>
                    <FilterProduct />
                    <Row>
                        {products.map((product) => (
                            <Col md={3} key={product.code}>
                                <Link to={`/productdetails/${product.id}`}>
                                    <Item image={getImageSrc(product.img)} title={product.title} date={product.code} price={product.price} isProductList={true} />
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <div className="button-product d-flex text-center justify-content-center">
                    <Button className="button-more" label="Xem thêm" />
                </div>
            </>
        );
    }
}

export default Products;
