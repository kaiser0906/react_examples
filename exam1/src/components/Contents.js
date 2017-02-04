import React from 'react';


class Contents extends React.Component {
  render() {
    return (
      <div>
        <h2>{ this.props.title }</h2>
        <p>{ this.props.body }</p>
      </div>
    );
  }
}


Contents.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string.isRequired,
}


export default Contents;
