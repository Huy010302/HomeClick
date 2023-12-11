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
import ImgSofa4 from "../../assets/image/imgSofa4.png"
import ImgSofa5 from "../../assets/image/imgSofa5.png"
import ImgSofa6 from "../../assets/image/imgSofa6.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from "../../components/Item/Item"

const getImageSrc = (img) => {
    switch (img) {
        case "../../assets/image/imgSofa1.png":
            return ImgSofa1;
        case "../../assets/image/imgSofa4.png":
            return ImgSofa4;
        case "../../assets/image/imgSofa5.png":
            return ImgSofa5;
        case "../../assets/image/imgSofa6.png":
            return ImgSofa6;
        default:
            return img ;
    }
};

//Array
class ProductSeen extends React.Component {
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
        console.log(products);

        // Kiểm tra xem products có phải là undefined hoặc null không
        if (!products) {
            return <div>Loading...</div>; // hoặc hiển thị một biểu tượng loading khác
        }

        const selectedProducts = [0,3,4,5].map((index) => products[index]);

        return (
            <>
                <Container>
                    <h3 className="product-post">SẢN PHẨM ĐÃ XEM</h3>
                    <Row>
                        {selectedProducts.map((product) => (
                            // Kiểm tra xem product có tồn tại không trước khi truy cập thuộc tính của nó
                            product && (
                                <Col md={3} key={product.code}>
                                    <Item image={getImageSrc(product.img)} title={product.title} date={product.code} price={product.price} isProductList={true} />
                                </Col>
                            )
                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}

export default ProductSeen;
