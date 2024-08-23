export const crudReducer =(state,action)=>{
    switch(action.type){
        case "ADD":
            state.push(action.obj)
            return [...state]
        case "REMOVE":
            state.splice(action.id,1)
            return [...state]
        default:
            return state
    }

}