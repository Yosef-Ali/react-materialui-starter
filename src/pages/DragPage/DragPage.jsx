import React, { Fragment } from 'react'
import { Segment } from 'semantic-ui-react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }))

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
})

import { Launcher } from '../../components/ModalLightweight'

class DragPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: getItems(10)
    }
    this.onDragEnd = this.onDragEnd.bind(this)
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    )

    this.setState({
      items
    })
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <Fragment>
<<<<<<< HEAD
        <h1>Lets Drag</h1>
        <Launcher buttonLabel="Open Modal">
          <div className="textModal">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi faucibus
              quam, sollicitudin posuere massa lacus cursus ligula. Quisque vel
              turpis a quam posuere lobortis. Aenean risus nunc, pretium eu
              massa tincidunt, dignissim tincidunt arcu. Integer et mauris
              vestibulum, pharetra eros nec, feugiat orci.
            </p>
          </div>
        </Launcher>
        <Segment>ok</Segment>
=======
        <h1>Let's Drag!</h1>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Segment>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {this.state.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Segment>
        </DragDropContext>
>>>>>>> dragPage
      </Fragment>
    )
  }
}

export default DragPage