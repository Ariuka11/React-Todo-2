import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import { Button} from 'semantic-ui-react'
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ], 
      todo : ""
    }
  }

  addTodo = e => {
    e.preventDefault();

    const newTodo = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [newTodo, ...this.state.todos],
      todo: ''
    })
  }

  toggleTask = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId){
          return {
            ...todo, 
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }
 
  clearCompleted = e => {
    e.preventDefault();
    
    this.setState({
      todos: this.state.todos.filter( todo => !todo.completed)
    })
  }

  
  handleChange = e => {
    this.setState({
        [e.target.name] : e.target.value
    })
  }

  // handleSubmit = e => {
  //   e.prevenDefault()
  //   console.log('ada', this.state.todo)
  //   this.props.addTodo( this.state.todo)
  //   this.setState ({
  //       todo: ''
  //   })
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render(){
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          todo = {this.state.todo}
          addTodo = {this.addTodo} 
          handleChange = {this.handleChange}
        />
        <Button onClick = {this.clearCompleted}>Clear Completed</Button>
        <div>
          <TodoList 
          todos = {this.state.todos}
          toggleTask = {this.toggleTask} />
        </div>
      </div>
    );
  }
}


export default App;
