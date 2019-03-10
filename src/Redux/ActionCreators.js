import {ADD_TODO,CHANGE_INPUT,DELET_TODO} from './ActionTypes';
//Action creators
export  function addTodo (){
    return{
        type: ADD_TODO,
    }
};

export  function changeInput (text){
    return{
        type: CHANGE_INPUT,
        value:text
    }
};

export  function deleteTodo (index){
    return{
        type: DELET_TODO,
        value:index
    }
};




