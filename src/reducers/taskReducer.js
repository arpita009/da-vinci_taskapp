const taskInitialState= {
    isLoading: false,
    data:[]
}

const taskReducer= (state= taskInitialState, action) =>{
    switch(action.type){
        case 'GET_ALL_NOTES' :{
            return {...state, data: [...action.payload]}
        }
        case 'LOADING_UPDATE' :{
            return {...state, isLoading: !state.isLoading}
        }
        case 'DELETE_TASK' :{
            const removed = state.data.filter((task) => task.id !== action.payload)
            return { ...state, data: [...removed] }
        }
        case 'ADD_CLIENT_TASK':{
            return {...state,data:[...state.data,action.payload]}
        }
        default : {
            return state
        }
    }
}

export default taskReducer

