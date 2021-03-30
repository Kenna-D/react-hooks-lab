//responsible for rendering the necessary input and button to make this interface work.

import React, {useState} from 'react';

const AddTodo = props => {
  const [userInput, setUserInput] = useState('');

  function handleImput(e) {
    e.preventDefault()
    props.addTodo(userInput)
    setUserInput('')
  };

  return(
    <form onSubmit={handleImput}>
      <input 
      onChange={e => setUserInput(e.target.value)}
      placeholder='enter a todo' 
      value={userInput}
      />
      <button>add your todo</button>
      {/* <button onclick={props.addTodo(userInput)}>add your todo</button> */}
    </form>
  )
};
export default AddTodo;

