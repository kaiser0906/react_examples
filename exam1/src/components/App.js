import React from 'react';
import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';
import RandomNumber from './RandomNumber';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: Math.round(Math.random() * 100),
    };

    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber(randomValue) {
    console.log('randomValue: ' + randomValue);
    this.setState({
      value: randomValue,
    })
  }

  render() {
    return (
      <div>
        <Header title={ this.props.name } />
        <Contents title={ this.props.title } body={ this.props.body } />
        <RandomNumber number={ this.state.value } onUpdate={ this.updateNumber } />
      </div>
    )
  }
}


App.defaultProps = {
  name: 'Dave Cho',
  title: 'Welcome to React World.',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}


export default App;
