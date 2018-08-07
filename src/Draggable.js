import React from "react";
import {DragSource} from "react-dnd";

const style = {
    border:"1px solid",
    width:"100px",
    height:"60px",
    paddingTop:"40px",
    textAlign:"center"
}

const type = "Draggable";

const spec = {
    beginDrag(props, monitor, component){
        const item = {id:props.id};
        return item;
    },

	endDrag(props, monitor) {
		const item = monitor.getItem()
		const dropResult = monitor.getDropResult()

		if (dropResult) {
			alert(`You dropped ${item.name} into ${dropResult.name}!`) // eslint-disable-line no-alert
		}
	}
}

const collect = (connect, monitor) => ({
    /**
     * connectDragSource is injected into components prop and we need to call this function in render to allow react to handle drag events
     */
    connectDragSource: connect.dragSource(),
    /**
     * this indicates whether draggable is dragging or not
     */
    isDragging: monitor.isDragging()
})
/**
 * @DragSourse <---> $().draggable
 * parameters :
 *  type : id || class
 *  spec : options that include dragStart, drag, stop, etc. But may not support all jQuery options
 *  collect : function that should return an object containing those props that should be injected into our component to be used during render
 */
@DragSource(type, spec, collect)

class Draggable extends React.Component{
    render(){
        const {isDragging, connectDragSource} = this.props;
        return connectDragSource(
            <div style = {style}>
                {isDragging ? "dragging" : "draggable"}
            </div>
        )
    }
}

export default Draggable;