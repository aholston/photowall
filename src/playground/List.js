import React, { Component }from 'react';

class List extends Component {
  render() {
      return (
        <ol>
          {this.props.tasks.map(function(task, idx) {
            return <li key = {idx}>{task}</li>
          })}
        </ol>
      )
  }
}

export default List
