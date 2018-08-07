import React, { Component } from 'react';
import Draggable from "./Draggable.jsx";
import Droppable from "./Droppable.jsx";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
class App extends Component {
  render() {
    return (
      <div>
        <Droppable></Droppable>
        <Draggable></Draggable>
      </div>
    );
  }
}

export default App;