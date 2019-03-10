import React, { Component} from 'react';
import MainUI from './UI/MainUI';
import {connect} from 'react-redux';
import { changeInput, addTodo,deleteTodo }  from './Redux/ActionCreators';
class App extends Component {
  render() {
    //UI组件
    return (
        <MainUI 
          input = {this.props.input}
          inputOnChange = {this.props.inputOnChange}
          addItem = {this.props.addItem}
          todos = {this.props.todos}
          deleteItem = {this.props.deleteItem}
          addFav = {this.props.addFav}
          starStatus = {this.props.starStatus}
        />
    );
  }

}

const mapStatetoProps = (state) =>{
  return {    
    starStatus:state.starStatus,
    input : state.input,
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    //input改变时
    inputOnChange(e){
      const action = changeInput(e.target.value);
      dispatch(action)
    },
    //添加事项
    addItem(){
      const action = addTodo();
      dispatch(action)
    },
    //删除事项
    deleteItem(index){
      const action = deleteTodo(index);
      dispatch(action)
    }
  }
}

export default connect(mapStatetoProps,mapDispatchToProps)(App);
