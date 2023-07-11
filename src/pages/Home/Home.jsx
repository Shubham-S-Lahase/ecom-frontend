import React from "react";
import "./Home.scss";
import Slider from "../../components/slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";

const Home = () => {
    return(
        <div className="home">
            <Slider/>
            <FeaturedProducts type="featured"/>
            <FeaturedProducts type="trending"/>
            <Categories/>
            <Contact/>
        </div>
    );
};

export default Home;