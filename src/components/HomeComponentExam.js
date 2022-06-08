import React from 'react'

export const HomeComponentExam = (props) => {
    console.log("props : ",props)
  return (
    <div>
        <hr></hr>
        Number of Product in Cart : <b>{props.cartData.cartData.length}</b>

        <hr></hr>
        
        <div className='card' >
            <div className='card-header'>
                iPhone 13 Pro Max
            </div>
            <div className='card-body'>
                <img src='https://images-eu.ssl-images-amazon.com/images/I/31jgoap1cQL._SY445_SX342_QL70_FMwebp_.jpg'></img>
            </div>
            <div className='card-footer'>
                <button class="btn btn-primary" onClick={()=>props.addToCartHandlerExam({productName : "iPhone 13 pro max",price : 120000})}>Add to cart</button>
            </div>
        </div>

        <hr></hr>
        <div className='card' >
            <div className='card-header'>
                Macbook Air M2
            </div>
            <div className='card-body'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswAa-Y0LaywhL_zuCJCxBA54pTpCji5r2cQ&usqp=CAU'></img>
            </div>
            <div className='card-footer'>
                <button class="btn btn-primary" onClick={()=>props.addToCartHandlerExam({productName : "Macbook Air M2",price : 120000})}>Add to cart</button>
            </div>
        </div>
    </div>
  )
}
