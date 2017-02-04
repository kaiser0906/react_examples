import React from 'react';


class App extends React.Component {
  render() {
    return (
      <Contacts />
    )
  };
}


class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactData: [
        {name: "Alex", phone: "111-111-1111"},
        {name: "Brian", phone: "222-222-2222"},
        {name: "Charles", phone: "333-333-3333"},
        {name: "Dave", phone: "444-444-4444"},
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <ul>
          { this.state.contactData.map((contact, i) => {
            return (
              <ContactInfo name={ contact.name } phone={ contact.phone } key={ i } />
            )
          })}
        </ul>
      </div>
    )
  };
}


class ContactInfo extends React.Component {
  render() {
    return (
      <li>{ this.props.name } { this.props.phone }</li>
    )
  };
}


export default App;
