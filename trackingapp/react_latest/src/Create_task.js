import React, { Component } from "react";
import AppNav from "./AppNav";
import 'react-datepicker/dist/react-datepicker.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Container } from "reactstrap";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import ReactDatePicker from "react-datepicker";

class Cretae_task extends Component {

  emptyTask = {
    task_id :'6',
    title: "",
    description: "",
    priority: "",
    category: "",
    date_added: new Date(),
    status: "",
    due_date:  new Date(),
    created_by: "",
    assigned_to: "",
    "user": null
  }

  constructor(props){
    super(props)
    this.state = {
      isLoading : true,
      tasks : [],
      date : new Date(),
      task: this.emptyTask,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.handleDateChange= this.handleDateChange.bind(this);
  }

  async handleSubmit(event){
     
    const task = this.state.task;
  

    await fetch('/api/task', {
      method : 'POST',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(task),
    });
    
    event.preventDefault();
    this.props.history.push("/task");
  }
  handleChange(event){
    const target= event.target;
    const value= target.value;
    const name = target.name;
    let task={...this.state.task};
    task[name] = value;
    this.setState({task});
    console.log(task);
}

handleDateChange(date){
  let task={...this.state.task};
  task.due_date= date;
  this.setState({task});

}


  async componentDidMount(){
    const response = await fetch('/api/dashboard')
    const body = await response.json();
    this.setState({tasks : body , isLoading : false})
  }






  render() {
    const title = <h3> Create new tasks</h3>
    const {tasks, isLoading} = this.state

    if (isLoading)
      return(<div>Loading...</div>)
      

    return (
      <div>
        <AppNav />
          <Container>
            {title}
          <container>
          <form onSubmit={this.handleSubmit}>
          <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" class="select-form-color" name="category"placeholder="Select" onChange={this.handleChange}>
              <option > </option>
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

          <Form.Group controlId="priority">
              <Form.Label>Priority</Form.Label>
              <Form.Control as="select" class="select-form-color" name="priority" placeholder="Select" onChange={this.handleChange}>
                <option  > </option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </Form.Control>
          </Form.Group>

          <Form.Group controlId="due_date">
            <Form.Label>Due Date</Form.Label>
            <ReactDatePicker name="due_date" selected={this.state.task.due_date}
            onChange={this.handleDateChange} />
          </Form.Group>

          <Form.Group controlId="assign">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" name="assign" placeholder="Only assign tasks if authorised" 
             onChange={this.handleChange} />
          </Form.Group>


          <Form.Group>
            <Button variant="primary" type="submit" 
               > Add Task</Button>{' '}


            <Button variant="danger" href="/dashboard" >Cancel</Button>{' '}
            <Button variant="warning" type="reset" >Reset</Button>
            
          </Form.Group>
      

          </form>
        </container>
        </Container>
        
      </div>
    );
  }
}

export default Cretae_task;
