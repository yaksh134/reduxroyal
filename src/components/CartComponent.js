import React from 'react'
import cartData from '../services/reducers/Reducer'

export const CartComponent = (props) => {

  
  return (
    <div>CartComponent

      <h2>Number of Product in Cart : {props.cartData.cartData.length}</h2>
      <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Product Name</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
        <th scope="col">Quantity</th>
        <th scope="col">Action</th>
        
        
      </tr>
    </thead>
    <tbody>


      {
        props.cartData.cartData.map((product)=>{

        

          
          
          return(
            <tr>
              
            <th scope="row">{product.productName}</th>
            <td>{product.price}</td>
            <td>
              <button class = "btn btn-danger" onClick={()=>props.removeFromCartHandler(product)}>-</button>
            </td>
            <td>{product.quantity}</td>
            <td>
              <button class = "btn btn-success" onClick={()=>props.addToCartHandler(product)}>+</button>
            </td>
            {/* <td>
              <button class = "btn btn-success" onClick={()=>increase(product)}>+</button>
            </td> */}
           
      </tr>

          )
          
        })
      }
      
      
    </tbody>
  </table>




    </div>
  )
}
