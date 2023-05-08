import React from 'react';
import HeroSlider from '../components/sliders/HeroSlider';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import SectionsHead from '../components/common/SectionsHead';
import TopProducts from '../components/product/TopProducts';
import Services from '../components/common/Services';
import MidContainer from "./MidContainer";
import UpContainer from './UpContainer';


const Home = () => {

    

    return (
        <main>
            <section>
            <div className="container">
                     
                    <MidContainer />
                </div>
            </section>
            {/* <section id="hero">
                <HeroSlider />
            </section> */}
            
            {/* <section>
            <div className="conatiner">
                <UpContainer/>
            </div>
            </section> */}

            <section id="featured" className="section">
                <div className="container">
                    
                    <FeaturedSlider />
                </div>
            </section>

            {/* <section>
            <div className="container">
                     
                    <MidContainer />
                </div>
            </section> */}

            <section id="products" className="section">
                <div className="container">
                    <SectionsHead heading="Top Products" />
                    <TopProducts />
                </div>
            </section>



            <Services />
        </main>
    );
};

export default Home;;