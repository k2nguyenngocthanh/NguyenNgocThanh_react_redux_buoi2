import { dataShoe } from "../data_shoe";
import { ADD_TO_CART, DELETE_TO_CART } from "./constants/constants";

let initiaValue={
    listShoe: dataShoe,
    cart:[],
};

export const shoeReducer =(state=initiaValue,action) => {
    switch(action.type){
        case ADD_TO_CART:{
            let cloneCart =[...state.cart]
            let index=cloneCart.findIndex((item)=>{
                return item.id==action.payload.id;
            });
            if(index==-1){
                let newShoe={...action.payload, soLuong:1};
                cloneCart.push(newShoe)
            }
            else{
                cloneCart[index].soLuong++;
            }
            return{...state,cart:cloneCart};
        }
        case DELETE_TO_CART:{
           let newCart=state.cart.filter((item)=>{
            return item.id !=action.payload;
           });
           return {...state,cart:newCart}
        }
        default:
            return state;
    }
}

