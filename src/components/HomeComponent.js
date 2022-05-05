import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartComponent } from './CartComponent'


export const HomeComponent = (props) => {
  console.log("props : ",props)
  console.log("lenght : ",props.cartData.cartData.length)

  const [state, setstate] = useState(false)

  

  
  return (
    
    <div>
      Number of Product in Cart : {props.cartData.cartData.length}  
        <div class="row">
        <div class="col-sm-6">
        <div class="card" style={{width: "20rem"}}>
        <img class="card-img-top" src="data:image/webp;base64,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" alt="Card image cap"/>
        <div class="card-body">
            <h5 class="card-title">iPhone 13 pro Max</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            <button class="btn btn-primary" onClick={()=>props.addToCartHandler({productName : "iPhone 13 pro max",price : 120000})}>Add to cart</button>
            <button class="btn btn-danger" onClick={()=>props.removeFromCartHandler({productName : "iPhone 13 pro max",price : 120000})}>Remove from cart</button>
        </div>
        </div>
        </div>

        <div class="col-sm-6">
        <div class="card" style={{width: "18rem"}}>
        <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            <button class="btn btn-primary" onClick={()=>props.addToCartHandler({productName : "Macbook air M1 MAX",price : 1200000})}>Add to cart</button>
            <button class="btn btn-danger" onClick={()=>props.removeFromCartHandler({productName : "Macbook air M1 MAX",price : 1200000})}>Remove from cart</button>
        </div>
        </div>
        </div>
        </div>

        

        <Link to={'/Listproducts'}>See Cart</Link>

        

        
    </div>
  )
}
