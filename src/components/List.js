import React, {useState} from 'react'
import './List.css'
import TodoItems from './TodoItems';
import Todo from './Todo';

const List = () => {
    const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
    return (
        <>
        <div className='listContainer'>
        <div className='main'>
            <div className='description'>
                <h1>Manage Your Daily Todo</h1>
                <p style={{maxWidth:'350px', lineHeight:'1.5em'}}>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with our Todo App.</p>
                <div className='emailContainer'><input className='email' placeholder='Email' />
                <div className='bn'>Sign-up it's free!</div></div>
                </div>
        <img src='https://miro.medium.com/max/1838/1*Yi0F57NIDl92amXxVSfgug.gif' className='ui'/>
        </div>
        <form className='list'>
            <div className='title'>Hello Ayman</div>
                <div className=''>10 pending tasks</div><br></br><br></br>
                <TodoItems onSubmit={addTodo} />
                <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                />
        </form>
        </div>
        </>
    )
}

export default List
