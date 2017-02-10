import React from 'react';
import { connect } from 'react-redux';
import { setDiff } from '../actions';


class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diff: '1',
    };
    this.onChangeDiff = this.onChangeDiff.bind(this);
  }

  onChangeDiff(e) {
    let diff = e.target.value;

    if (isNaN(diff)) return;
    this.setState({
      diff: (diff !== '') ? diff : '0',
    });

    this.props.onUpdateDiff(parseInt(diff, 10));
  }

  render() {
    return (
      <div>
        <input type="text" value={ this.state.diff } onChange={ this.onChangeDiff } />
      </div>
    );
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    onUpdateDiff: (value) => dispatch(setDiff(value)),
  };
};


Option = connect(undefined, mapDispatchToProps)(Option);


export default Option;
