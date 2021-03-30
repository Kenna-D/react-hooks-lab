// Responsable for rendering a mapped list of todos which is passed as props from app.js

import React from 'react';
import Todo from './Todo';

const List = (props) => {
  const mappedTodos = props.list.map((item, index) => {
    return <Todo item={item} key={index}/>
  });
  return(
    <div>
      {mappedTodos}
    </div>
  )
}
export default List;