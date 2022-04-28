export default function cartData(state=[],action){
    switch(action.type){
        case "AddToCart":
            return [...state,action.product]

        case "RemoveFromCart":
            state.pop();
            return [...state]
        default : 
            return state
    }
}