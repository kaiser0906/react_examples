import React from 'react';


class StateExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'Header initial data',
      content: 'Content initial data',
    };
  }

  updateHeader(text) {
    console.log(text.target);
    this.setState({
      header: 'aaa',
    });
  }

  render() {
    return (
      <div>
        <h1>{ this.state.header }</h1>
        <p>{ this.state.content }</p>
        <button onClick={ this.updateHeader.bind(this) }>Update</button>
      </div>
    );
  }
}

export default StateExample;
