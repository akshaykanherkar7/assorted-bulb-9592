import * as types from  './actionTypes'
const initstate={
    cars:[],
        isLoading: false,
        isError: false,
}


export const carReducer=(state=initstate,{type,payload})=>{
   switch(type){

    case types.GET_CARS_REQUEST : {
        return{...state, isLoading:true, isError: false}
    }

    case types.GET_CARS_SUCCESS : {
        return{...state,cars: payload, isLoading:false, isError: false}
    }

    case types.GET_CARS_FAILURE : {
        return{...state, isLoading:false, isError: true}
    }

    default :
        return state;
    
   }
}     