export default function cartData(state=[],action){
    switch(action.type){
        case "AddToCart":
            console.log("state " , state)
            console.log("action ",action.product)

            var flag = -1
            
            for(let i in state){
                if(action.product.productName === state[i].productName){
                    flag = i
                    break
                }
            }

            // if(flag == 1){
            //     state[flag].quantity = state[flag].quantity + 1
            //     return[...state]
            // }else{
            //     action.product.quantity = 1
            //     return [...state,action.product]
            //}

            if(flag === -1){
                action.product.quantity = 1;
                return [...state,action.product]
            }else{
                state[flag].quantity = state[flag].quantity + 1
                return [...state]
            }
            //return [...state,action.product]

        case "RemoveFromCart":
            for(var i = 0;i<state.length;i++){
                // console.log("state.i.productName : ",state[i].productName)
                // console.log("action.product.productName : ",action.product.productName)
                if(state[i].productName === action.product.productName){
                    var index = i
                    break;
                }
            }
            
            console.log("var : ",index)
            console.log(state)
            if (index !== -1 && state[index].quantity===1) {
                state.splice(index, 1);
            }else{
                state[index].quantity = state[index].quantity - 1 
            }
            //state.pop();
            return [...state]
        default : 
            return state
    }
}