export  const addToCart = (product)=>{
    console.log(product)

    return{
        type : "AddToCart",
        product : product
    } 
}

export const removeFromCart = (product)=>{
    console.log(product)

    return{
        type : "RemoveFromCart",
        product : product
    }
}