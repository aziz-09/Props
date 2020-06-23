// import React from 'react'



// function ProductTable(props) {
//     console.log(props)
//     return (
//         <div className="Producttable">
//                 {
//                     props.products.map(element=>(<div>


//                     </div>))          }
 

        
            
//         </div>
//     );
// }

// export default ProductTable; 

import React from 'react'
import PropTypes from 'prop-types'

 function ProductTable(props) {
    return (
        
        <table>
           {props.x.map (el =>
           
              <tr className={el.oooo}>
           
           <th >{el.name}</th>
           <th> {el.price}</th>
           <th>{el.category}</th>
              </tr>
        
           )}
        </table>
        
    )
}
export default ProductTable ; 

 ProductTable.propTypes ={
    element:PropTypes.array
}   
   console.log(ProductTable.propTypes );
