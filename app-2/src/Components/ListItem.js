import React from 'react'

const ListItem = (props) => {
  let mappedcats = props.catFacts.map((item, index) => {
    return(
      <ul key={index}>
        {item.text}
      </ul>
    )
  });
  //const mappedTodos = props.list.map((item, index) => {
  //   return <Todo item={item} key={index}/>
  // });

  return(
    <div>
      {mappedcats}
    </div>
  ) 
  
};

export default ListItem;