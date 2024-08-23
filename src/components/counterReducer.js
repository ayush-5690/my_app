export const counterReducer=(state,action)=>{
    console.log(state,action);
    if(action.type === "ADD"){
        state= state+1
    }else if(action.type === "MINUS"){
        state= state-1
    }else if(action.type === "REMOVE"){
        state =0
    }

    return state
}