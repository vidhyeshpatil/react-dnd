import React, {Component} from "react";
import {DropTarget} from "react-dnd";

const style = {
    border:"1px solid",
    width:"200px",
    height:"200px",
    textAlign:"center"
}

const type = "Draggable";

const spec = {
    canDrop(props, monitor) {
        // You can disallow drop based on props or item
        const item = monitor.getItem();
        return true;
    },
    drop(props, monitor, component) {
        if (monitor.didDrop()) {
            // If you want, you can check whether some nested
            // target already handled drop
            return;
        }

        // Obtain the dragged item
        const item = monitor.getItem();

        // You can do something with it

        // You can also do nothing and return a drop result,
        // which will be available as monitor.getDropResult()
        // in the drag source's endDrag() method
        return { moved: true };
    }
}

const collect = (connect, monitor)=>({
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
})

@DropTarget(type, spec, collect)

class Droppable extends Component{
    render(){
        const {isOver, connectDropTarget} = this.props;
        return connectDropTarget(
            <div style = {style}>
                {isOver ? "over" : "Droppable"}
            </div>
        )
    }
}

export default Droppable;