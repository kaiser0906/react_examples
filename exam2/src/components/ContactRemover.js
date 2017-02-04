import React from 'react';


class ContactRemover extends React.Component {
  handleRemove() {
    this.props.onRemove();
  }

  render() {
    return (
      <button onClick={ this.handleRemove.bind(this) }>Remove</button>
    );
  }
}


export default ContactRemover;
