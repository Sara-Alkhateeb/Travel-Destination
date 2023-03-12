import React from 'react';
import { useParams } from 'react-router-dom';
import "./TourDetails.css";
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Description from "./Description";
const data = require('../../data/db.json');

function TourDetails() {
    let { id } = useParams();
    return (<>  <Header />
        <div id='Tours'>

            {data.map((item) => {
                if (id === item.id) {
                    return (

                        <div key={item.id} className='Card'>
                            <h2 className="Tour-name">{item.name}</h2>
                            <h5>{item.id}</h5>
                            <Description description={item.info}/>
                            <h4 className="Tour-price">{item.price}</h4>
                            <img className="Tour-image" src={item.image} alt={item.name} />
                        </div>

                    )
                }
            })}

        </div>
        <Footer />
    </>
    )
}

export default TourDetails;

