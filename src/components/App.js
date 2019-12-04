import React from 'react';
import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{
        task: 'This is the first task',
        isComplete: false,
      },
      {
        task: 'This is the second task',
        isComplete: true,
      }],
      task: '',
    }

    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">ToDo List</a>
            </div>
          </div>
        </nav>

      <div className="container">
        <div className="content-area row">
          <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2"></div>
          <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8">
            <h2>ToDo List</h2>
            <div className="row input-area">
            <div className="col-md-1"></div>
            <div className="form-group col-md-9">
              <input type="text" placeholder="New Task" className="form-control" id="addTask"/>
            </div>
            <div className="form-group col-md-1">
              <button className="btn btn-primary">Add</button>
            </div>
            <div className="col-md-1"></div>
            </div>
            <TaskForm onSubmit={this.addTask} />
            <TaskList tasks={this.state.tasks}
              toggleTaskStatus={this.toggleTaskStatus} deleteTask={this.deleteTask}/>
          </div>
        </div>
      </div>
      </div>
    )
  }

  toggleTaskStatus(index) {
    console.log('this is toggleTaskStatus');
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));
    tasks[index].isComplete = !tasks[index].isComplete;
    this.setState({tasks});
    /* this.tasks[index].isComplete = !this.tasks[index].isComplete;
    this.loadTasks(); */
  }

  deleteTask(event, index) {
    console.log('this is deleteTask');
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));
    tasks.splice(index, 1);
    this.setState({tasks});
  }

  addTask() {
    console.log('this is addTask');
    /* let addTB = document.getElementById('addTask');
    const text = addTB.value;
    if (text == "") {
      addTB.parentElement.classList.add("has-error");
    } else {
      addTB.parentElement.classList.remove("has-error");
      let newTask = {
        task: text, isComplete: false
      }
      this.tasks.push(newTask);
      this.loadTasks();
      addTB.value = "";
    } */
  }
}

export default App;
