import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';


function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return (
      <p>The water would boil.</p>
    );
  } else {
    return (
      <p>The water would not boil.</p>
    )
  }
}


function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}


function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

const scales = [{
  name: 'celsius',
  func: toCelsius,
}, {
  name: 'fahrenheit',
  func: toFahrenheit,
}];


function tryConvert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) return '';

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


class Calculator extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
      scale: 'celsius',
    };
  }

  handleChange(value, scale) {
    this.setState({
      value: value,
      scale: scale,
    });
  }

  render() {
    const value = this.state.value;

    return (
      <div>
        { scales.map((scale, i) => {
          return (
            <TemperatureInput key={ i }
                              value={ scale.name === this.state.scale ? this.state.value : tryConvert(value, scale.func) }
                              scale={ scale.name }
                              onChange={ this.handleChange } />
          );
        })}
        <BoilingVerdict celsius={ parseFloat(value) } />
      </div>
    );
  }
}


export default Calculator;
