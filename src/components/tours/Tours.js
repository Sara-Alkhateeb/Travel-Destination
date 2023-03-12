
import './Tours.css'
import Tour from './Tour/Tour';



function Tours() {
    return (
        // <div id='Tours'>
        //     {data.map((item) => {
        //         return (
        //             <div key={item.id} >
        //                 <h2 className="Tour-name">{item.name}</h2>
        //                 { <h5>{item.id}</h5>}
        //                 {<p>{item.info}</p>}
        //               <h4>{item.price}</h4> }
        //                 <img src={item.image} alt={item.name}></img >
        //             </div>
        //         )
        //     })
        //     }
        // </div>
<Tour tour = {Tour}/>
    )
}
export default Tours;