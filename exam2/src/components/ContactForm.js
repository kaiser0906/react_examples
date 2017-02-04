import React from 'react';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keySelected: -1,
      name: '',
      phone: '',
    }
  }

  handleChange(e) {
    var contact = {};
    contact[e.target.name] = e.target.value;
    this.setState(contact);
  }

  handleSubmit() {
    this.props.onSubmit(this.state.keySelected, this.state.name, this.state.phone);
    this.setState({
      keySelected: -1,
      name: '',
      phone: '',
    })
  }

  componentWillReceiveProps(props){
    this.setState({
      keySelected: props.keySelected,
      name: props.contact.name,
      phone: props.contact.phone,
    });
  }

  render() {
    return (
      <div>
        <input type="text" name="name" placeholder="Name" value={ this.state.name } onChange={ this.handleChange.bind(this) } />
        <input type="text" name="phone" placeholder="Phone" value={ this.state.phone } onChange={ this.handleChange.bind(this) } />
        <button type="button" onClick={ this.handleSubmit.bind(this) }>Submit</button>
      </div>
    )
  };
}


export default ContactForm;
