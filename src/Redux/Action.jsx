export const  Increment_Count = " ADD_COUNT";
export const Decrement_Count = " DEC_COUNT";
// export const ADD_TODO = "ADD_TODO";


export const Addition = (data) => {
  return {
    type: Increment_Count,
    payload: data,
  };
};
export const Subtraction = (data) => {
    return {
      type: Decrement_Count,
      payload: data,
    };
  };
 

  
   