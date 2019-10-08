import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react'

class TodoForm extends Component {
    render(){
        return (
            <Form>
                <input
                   type = 'text'
                   name = 'todo'
                   value = {this.props.todo}
                   placeholder = 'Add Todo'
                   onChange = {this.props.handleChange}
                />
                <Button onClick = {this.props.addTodo}>Add</Button>
            </Form>
        )
    }
}

export default TodoForm;