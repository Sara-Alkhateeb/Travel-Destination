import "./Alldestination.css";
import Footer from '../footer/Footer';
import Header from '../header/Header';
const data = require('../../data/db.json')


function Alldestination() {
    return (
      <div className="ToursDetails"> 
        <Header />
        {data.map((item) => {
          return (
            <div key={item.id} className='Card'>
              <h2 className="Tour-name">{item.name}</h2>
              <h5>{item.id}</h5>
              <p className="Tour-info">{item.info}</p>
              <h4 className="Tour-price">{item.price}</h4>
              <img className="Tour-image" src={item.image} alt={item.name} />
            </div>
          )
        })}
        <Footer />
      </div>
    );
  }
export default Alldestination;