import {  Increment_Count,Decrement_Count} from "./Action";
// import { store } from "./Store";

const init={counter:0, todos:[]}
export const counterReducer = (store=init,{type , payload})=>{
    switch(type){
        case Increment_Count: 
        return {...store, counter: store.counter + payload};
        case Decrement_Count: 
        return {...store, counter: store.counter - payload};
        default: return store
    }
    
}