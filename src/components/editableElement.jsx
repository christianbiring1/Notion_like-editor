import React, { Component } from 'react';
import uid from './uniqueID';

const initialBlock = { id: uid(), html: "", tag: "p" };

class EditablePage extends Component {
  constructor(props) {
    super(props);
    this.state = { blocks: [initialBlock] };
  }

  render() {
    return (
      <div className="Page">
        {this.state.blocks.map((block, key) => {
          return (
            <div key={key} id={block.id}>
              Tag: {block.tag}, Content: {block.html}
            </div>
          );
        })}
      </div>
    );
  }
}

export default EditablePage;