import React from 'react';
import Header from "../components/Header/Header/Header";
import BannerSlider from '../components/Banner/Banner';
import ProductSale from '../components/ProductSale/ProductSale';
import Article from '../layouts/Item/Article';
import Collection from '../layouts/Item/Collection';
import ProjectProminent from '../layouts/Post/ProjectProminent';
import ServiceAdvisory from '../layouts/Post/ServiceAdvisory'
import Footer from "../components/Footer/Footer"
import BackTopBtn from '../components/Button/ButtonToTop';
function HomePage() {
    return (
        <>
                <Header />
                <BannerSlider />
                <ProductSale />
                <Article />
                <Collection />
                <ProjectProminent />
                <ServiceAdvisory />
                <BackTopBtn />
                <Footer />
        </>
    );
}
export default HomePage;