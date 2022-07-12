import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../modules/todos';
import Todos from './Todos';

const TodoContainer = (props) => {
    //dispatch함수 만들기
    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch();
    // dispatch({
      //  type: "dd",
       // text: text,
    //})
    const onCreate = text => dispatch(addTodo(text));
    const onToggle = id => dispatch(toggleTodo(id));
    return (
        <Todos todos={todos} onCreate={onCreate} onToggle={onToggle}/>
    );
};

export default TodoContainer;