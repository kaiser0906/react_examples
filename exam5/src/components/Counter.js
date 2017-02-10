import React from 'react';
import { connect } from 'react-redux';


class Counter extends React.Component {
  render() {
    return (
      <h1>Counter: { this.props.value }</h1>
    );
  }
}

// let Counter = ({ value }) => {
//   return (
//     <h1>Counter: { value }</h1>
//   );
// };



let mapStateToProps = (state) => {
  return {
    value: state.counter.value,
  };
};


Counter = connect(mapStateToProps)(Counter);


export default Counter;
