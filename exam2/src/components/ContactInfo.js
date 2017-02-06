import React from 'react';


class ContactInfo extends React.Component {
  handleSelect() {
    this.props.onSelect(this.props.contactKey);
  }

  handleRemove(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.onRemove(this.props.contactKey);
  }

  shouldComponentUpdate(props, state) {
    // This allows to update only element has been changed.
    return (JSON.stringify(props) !== JSON.stringify(this.props));
  }

  render() {
    let itemStyle = (isSelected) => {
      if (!isSelected) return;

      return {
        fontWeight: 'bold',
        backgroundColor: 'yellow',
      };
    };

    return (
      <li style={ itemStyle(this.props.isSelected) }
          onClick={ this.handleSelect.bind(this) }>
          { this.props.name } { this.props.phone }
          <button onClick={ this.handleRemove.bind(this) }>Remove</button>
      </li>
    );
  }
}


export default ContactInfo;
