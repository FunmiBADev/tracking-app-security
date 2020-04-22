emptyItem = {
    task_id:333,
    title : '', 
    description : '' ,
    priority : '',
    category : '',
    date_added : new Date,
    status : '',
    due_date : '',
    created_by : '',
    assigned_to : '',
}

constructor(props){
super(props)

this.state = { 
    isLoading :false,
    Task :[],
    date :new Date(),
    item : this.emptyItem
 }

 this.handleSubmit= this.handleSubmit.bind(this);
 this.handleChange= this.handleChange.bind(this);
 this.handleDateChange= this.handleDateChange.bind(this);

} 

async handleSubmit(event){
     
    const item = this.state.item;


    await fetch(`/api/task`, {
        method : 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(item),
    });
    
    event.preventDefault();
    this.props.history.push("/task");
}

handleChange(event){
    const target= event.target;
    const value= target.value;
    const name = target.name;
    let item={...this.state.item};
    item[name] = value;
    this.setState({item});
    console.log(item);
}


handleDateChange(date){
    let item={...this.state.item};
    item.expensedate= date;
    this.setState({item});

}

async remove(task_id){
    await fetch(`/api/task/${task_id}` , {
        method: 'DELETE' ,
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        }

    }).then(() => {
        let updatedTasks = [...this.state.Tasks].filter(i => i.task_id !== task_id);
        this.setState({Tasks : updatedTasks});
    });

}

const responseTask = await fetch('/api/task');
const bodyTask = await responseTask.json();
this.setState({Tasks : bodyTask , isLoading :false});
console.log(bodyTask);