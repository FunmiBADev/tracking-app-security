import React, { Component } from "react";
import AppNav from "./AppNav";
import 'react-datepicker/dist/react-datepicker.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Container } from "reactstrap";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

class EditTaskForm extends Component {
  state = {

    }

    constructor(props){
      super(props)
      this.state = {
        isLoading : true,
        tasks : [],
        date : new Date(),
      
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.loadTask= this.loadTask.bind(this);
      this.handleDateChange= this.handleDateChange.bind(this);
    }
  
    async handleSubmit(event){
       
      const task = this.state.task;
    
  
      await fetch('/api/task/' + this.state.task_id, {
        method : 'PUT',
        headers : {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(task),
      });
      
      event.preventDefault();
      this.props.history.push("/task");
    }

    componentDidMount() {
      this.loadTask();
    }
  
  handleDateChange(date){
    let task={...this.state.task};
    task.due_date= date;
    this.setState({task});
  
  }

//   async loadTask() {
//     const response = await fetch('/api/task/' + window.localStorage.getItem("taskId"));
//     const task = await response.json();
//     this.setState({
//         id: task.task_id,
//         title: task.title
//     });
// }
  
  
onChange = (t) => this.setState({ [t.target.name]: t.target.value });

    
  render() { 
    const title = <h3>Edit Task</h3>
    return (  
      <div>
        <AppNav />
          <Container>
            {title}
          <container>
          <form onSubmit={this.handleSubmit}>
          <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" class="select-form-color" onChange={this.handleChange}>
              <option value="User story">User story</option>
              <option value="Bug">Bug</option>
              <option value="Issue">Issue</option>
              </Form.Control>
          </Form.Group>
          
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" placeholder="Title" onChange={this.handleChange} />
          </Form.Group>

         
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3"class="form-control" name= "description" placeholder="Description"
               onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="category">
              <Form.Label>Priority</Form.Label>
              <Form.Control as="select" class="select-form-color" onChange={this.handleChange}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </Form.Control>
          </Form.Group>

          <Form.Group controlId="due_date">
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" name="due_date" onChange={this.handleDateChange} />
          </Form.Group>

          <Form.Group controlId="assign">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" name="assign" placeholder="Only assign tasks if authorised" 
             onChange={this.handleChange} />
          </Form.Group>

          <Form.Group>
            <Button variant="primary" type="submit" 
            onClick={() => {
              store.addNotification({
                title: 'Event',
                message: 'Update Sucessful',
                type: 'default',                         
                container: 'bottom-left',                
                animationIn: ["animated", "fadeIn"],     
                animationOut: ["animated", "fadeOut"],   
                dismiss: {
                  duration: 3000 
                }
              })
            }}    >
              Save Change</Button>{' '}


            <Button variant="danger" href="/dashboard" >Cancel</Button>{' '}
            </Form.Group>
            </form>
            </container>
            </Container>
      </div>
    );
  }
}
 
export default EditTaskForm;