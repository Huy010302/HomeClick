//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Viết Layout Colection>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 01/12/2023: viết phần Colection cho HomePage - Huy Nguyen <nglehuycontactwork@gmail.com>
// 
import React from "react";
import  ImgPost1  from "../../assets/image/ImgCollection.png";
import  ImgPost2  from "../../assets/image/ImgCollection2.png";
import ImgPost3 from "../../assets/image/ImgCollection3.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from "../../components/Item/Item";

// Get Img
const getImageSrc = (img) => {
    switch (img) {
        case "../../assets/image/ImgCollection.png":
            return ImgPost1;
        case "../../assets/image/ImgCollection2.png":
            return ImgPost2;
        case "../../assets/image/ImgCollection3.png":
            return ImgPost3;
        default:
            return img;
    }
};

//Array
class Collection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: []
        };
    }


// Fetch data from data-collection.json
    componentDidMount() {
        fetch("data-collection.json")
            .then((response) => response.json())
            .then((collections) => {
                this.setState({ collections: collections });
            });
    }
// Render
    render() {
        const { collections } = this.state;
        console.log(collections)
        return (
            <>
                <Container>
                    <h3 className="collection-post">COLLECTION</h3>
                    <Row>
                        {collections.map((collection) => (
                            <Col md={4}>
                                <Item image={getImageSrc(collection.img)} title ={collection.title} sku={collection.code} price ={collection.price}  />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}

export default Collection;
