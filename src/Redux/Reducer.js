import update from 'immutability-helper';
import {ADD_TODO,CHANGE_INPUT,DELET_TODO} from './ActionTypes';

//原始数据
const initialState= {
    input:"",
    todos: []
}

const todoApp =(state = initialState,action)=> {
    switch(action.type){
        //覆盖原有state,加入新的input
        case ADD_TODO:
            return Object.assign({},state,{
                todos:[...state.todos,
                    state.input],
                input:"",
        })
        //当输入框变化时
        case CHANGE_INPUT:
            return Object.assign({},state,{
                input: action.value
            })
        
        //删除todo
        case DELET_TODO:
            return update(
                state,
                {
                  todos: {$splice:[[action.value,1]]}
                }
            )
        
        default:
            return state
    }
}

export default todoApp;
