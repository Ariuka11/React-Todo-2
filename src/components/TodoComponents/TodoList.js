// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo'
import {Item} from 'semantic-ui-react'

class TodoList extends Component {

    render(){
        return (
            <Item>
                {this.props.todos.map(
                    todo => (
                        <Todo
                        key = {todo.id}
                        todo = {todo}
                        toggleTask = {this.props.toggleTask}
                        />
                    )
                )}
            </Item>
        )
    }
}

export default TodoList;