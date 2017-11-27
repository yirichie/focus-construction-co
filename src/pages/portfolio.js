import React from 'react';

import hMart from '../images/h-mart.jpg';
import kyochon from '../images/kyochon.jpg';
import parisBaguette from '../images/paris-baguette.jpg';
import bobaLoca from '../images/boba-loca.jpg';

const Portfolio = () => {
    return (
        <div className="portfolio-section">
            <img src={hMart} alt="" className="portfolio-img" />
            <img src={parisBaguette} alt="" className="portfolio-img" />
            <img src={kyochon} alt="" className="portfolio-img" />
            <img src={bobaLoca} alt="" className="portfolio-img" />
        </div>
    );
};

export default Portfolio;
