import { Addition, Subtraction } from '../Redux/Action'
import { useDispatch, useSelector } from 'react-redux'

export const Counter = ()=>{
  const dispatch = useDispatch();
  const counter = useSelector((store)=>store.counter)

return (
    <div style={{border:"1px solid Black",width:"20%",margin:"auto",marginTop:"15%",backgroundColor:'skyblue'}}>
         <h1>Counter</h1>
         <div style={{border:"1px solid Black",fontSize:"30px",backgroundColor:"brown",color:'white'}}>{counter}</div>
      <button onClick={()=>(
        dispatch(Addition(1))
      )}>Increment</button>
         <button onClick={()=>(
        dispatch(Subtraction(1))
      )}>Decrement</button>
    </div>
)
}