import React, { useState } from "react";
import PageHeaderContain from "../../components/pageHeaderContainer";
import { BsInfoCircleFill } from "react-icons/bs";
import "./styles.scss";
import image_1 from "../../assets/images/image-1.png";
import image_2 from "../../assets/images/image-2.png";
import image_3 from "../../assets/images/image-3.png";
import default_image from "../../assets/images/default.png"; 

const portfolioData = [
  {
    id: 2,
    name: "Garage du gouvernemement",
    image: image_1,
    link: 'https://s398531796.initial-website.com/'
  },
  {
    id: 2,
    name: "Système de paiement Intégré",
    image: image_2,
    link: 'https://immagov.com/'
  },
  {
    id: 2,
    name: "Application de recrutement des hommes de métiers en République de Guinée",
    image: image_3,
    link: 'https://www.wolikefanyi.com'
  },
  {
    id: 4,
    name: "Design",
    image: default_image,
    link: '#'
  },
];
const filterData = [
  {
    filter_id: 1,
    label: "ALL",
  },
  {
    filter_id: 2,
    label: "Développement",
  },
  {
    filter_id: 3,
    label: "Design",
  },
];
function Portfolio() {
  const [ filteredvalue,setFilteredValue ] = useState(1);
  const [ hoveredValue,setHoverValue ] = useState(null);
  const handleFilter = (currentID) => {
    setFilteredValue(currentID);
  }

  const handleOver = (index) => {
        setHoverValue(index);
  }
  const openLink = (link) => {
     window.open(link,"_blank")
  }
  const filteredItems = filteredvalue === 1 ? portfolioData : portfolioData.filter(p => p.id === filteredvalue )
  return (
    <section className="portfolio" id="portfolio">
      <PageHeaderContain
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li key={item.filter_id} className={ item.filter_id === filteredvalue ? "active":''} onClick={() => handleFilter(item.filter_id)}>{item.label}</li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {
            filteredItems.map((item,index) => (
              <div className="portfolio__content__cards__item" key={`cardItem${item.name}`}
              onMouseEnter={() => handleOver(index)}
              onMouseLeave={() => handleOver(null)}
              >
                 <div className="portfolio__content__cards__item__img-wrapper">
                    <a href="#" target="_blank">
                       <img src={item.image} alt="job images" />
                    </a>
                 </div> 
                 <div className="overlay">
                    {
                      index === hoveredValue && 
                      (<div>
                        <p>{ item.name }</p>
                        <button onClick={() => openLink(item.link)}>Visiter</button>
                      </div>)
                    }
                 </div> 
              </div>  
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
