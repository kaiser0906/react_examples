import React from 'react';


class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
    }
  }

  handleChange(e) {
    this.props.onChange(e.target.value, this.props.scale);
  }

  componentWillReceiveProps(props){
    this.setState({
      value: props.value,
    });
  }

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in { this.props.scale }:</legend>
        <input value={ this.state.value } onChange={ this.handleChange } />
      </fieldset>
    );
  }
}


export default TemperatureInput;
