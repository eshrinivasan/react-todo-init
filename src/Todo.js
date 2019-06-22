import React from 'react';
import './Todo.css';
import List from './List';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     value: '',
     items: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value:e.target.value});
  }

  handleClick(e) {
    this.setState(state=>{
      state.items = state.items.concat(state.value);
      //console.log(state.items);
      return state.items;
    });
  }

  render() {
    return(
      <div className="container" >
      <div className="row bd-highlight mb-3 align-items-center">
      <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Add Todo" />
      <button type="button" className="btn-sm btn-primary" onClick={this.handleClick}>Add</button>
      </div>
      <List items={this.state.items}/>
      </div>
    )
  }
}

export default Todo;
