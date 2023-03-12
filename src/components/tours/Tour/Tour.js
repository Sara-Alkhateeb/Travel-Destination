import React from 'react';
import Button from 'react-bootstrap/Button';
import './Tour.css' ;
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const data = require('../../../data/db.json')

function Tour(props) {
    return (
               <div id="Tour">
            {data.map((item) => {
                return (<div key={item.id}   >
                    <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title style={{ fontSize: '30px'}}>{item.name}</Card.Title>
                        <div id ='button'>
                        <Button> <Link to={`/city/${item.id}`}>Read more</Link></Button>
                        </div>  
                    </Card.Body>
                </Card>   
                        {/* <img src={item.image} alt={item.name} ></img > */}
                    </div>
                );
            })}
       
        </div>
    );
}

export default Tour;
// className="card" style={{ backgroundImage: `url(${item.image})`}} 