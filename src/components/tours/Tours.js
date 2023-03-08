import './Tours.css'
const data = require('../../data/db.json')


function Tours() {
    return (
        <div id='Tours'>
            {data.map((item) => {
                return(
                    <div>
                      <h2>{item.name}</h2>  
                      <h5>{item.id}</h5> 
                      <p>{item.info}</p>
                      <h4>{item.price}</h4>
                      <img src={item.image}  alt={item.name}></img> 


                    </div>
                )
            })
            }
        </div>)
}
export default Tours;