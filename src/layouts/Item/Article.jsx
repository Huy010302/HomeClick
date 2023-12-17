//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Viết Layout Article>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 01/12/2023: viết phần Article cho HomePage - Huy Nguyen <nglehuycontactwork@gmail.com>
// 
import React from "react";
import ImgPost1 from "../../assets/image/ImgPost1.png";
import ImgPost2 from "../../assets/image/ImgPost2.png";
import ImgPost3 from "../../assets/image/ImgPost3.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from "../../components/Item/Item"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const getImageSrc = (img) => {
    switch (img) {
        case "../../assets/image/ImgPost1.png":
            return ImgPost1;
        case "../../assets/image/ImgPost2.png":
            return ImgPost2;
        case "../../assets/image/ImgPost3.png":
            return ImgPost3;
        default:
            return img;
    }
};

//Array
class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    // Fetch data from data-article.json
    componentDidMount() {
        fetch("data-article.json")
            .then((response) => response.json())
            .then((articles) => {
                this.setState({ articles: articles });
            });
    }
    // Render
    render() {
        const { articles } = this.state;
        console.log(articles)
        return (
            <>
                {/* <Container fluid className="d-md-block d-lg-block d-xl-block d-sm-none d-xs-none"> */}
                <Container>
                    <h3 className="article-post">ARTICLE</h3>
                    <Row>
                        {articles.map((article) => (
                            <Col md={4}>
                                <Item image={getImageSrc(article.img)} title={article.title} date={article.date} />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Container>
                    <h3 className="article-post">ARTICLE</h3>
                    <Slider dots={true} infinite={true} speed={500} slidesToShow={3} slidesToScroll={1}>
                        {articles.map((article) => (
                            <div key={article.id}>
                                <Item image={getImageSrc(article.img)} title={article.title} date={article.date} />
                            </div>
                        ))}
                    </Slider>
                </Container>
            </>
        );
    }
}

export default Article;
