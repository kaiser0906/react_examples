import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import update from 'react-addons-update';


class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactData: [
        {name: "Alex", phone: "111-111-1111"},
        {name: "Brian", phone: "222-222-2222"},
        {name: "Charles", phone: "333-333-3333"},
        {name: "Dave", phone: "444-444-4444"},
      ],
      keySelected: -1,
    };
  }

  _updateContact(key, name, phone) {
    console.log(key, name, phone);
    let state;
    if (key === -1) {
      state = update(this.state, {
        contactData: {
          $push: [{"name": name, "phone": phone}]
        },
      });
      this._clearContactState();
    } else {
      state = update(this.state, {
        contactData: {
          [key]: {
            name: { $set: name },
            phone: { $set: phone }
          },
        },
      });
      state['contactSelected'] = {
        name: name,
        phone: phone,
      };
    }

    this.setState(state);
  }

  _onSelect(key) {
    if (this._isSelected(key)) {
      console.log('Key selected canceled.');
      this._clearContactState();
      return;
    }

    this.setState({
      keySelected: key,
      contactSelected: this.state.contactData[key],
    });

    console.log(key + ' selected.');
  }

  _isSelected(key) {
    if (key === this.state.keySelected) {
      return true;
    } else {
      return false;
    }
  }

  _removeContact(key) {
    if (key === undefined || key === -1) {
      console.log('Contact not selected');
      return;
    }

    this.setState({
      contactData: update(
        this.state.contactData,
        {
          $splice: [[key, 1]]
        },
      ),
    });
    this._clearContactState();
  }

  _clearContactState() {
    this.setState({
      keySelected: -1,
      contactSelected: {
        name: '',
        phone: '',
      },
    });
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <ul>
          { this.state.contactData.map((contact, i) => {
            return (
              <ContactInfo name={ contact.name }
                           phone={ contact.phone }
                           key={ i }
                           contactKey={ i }
                           isSelected={ this._isSelected.bind(this)(i) }
                           onSelect={ this._onSelect.bind(this) }
                           onRemove={ this._removeContact.bind(this) } />
            )
          })}
        </ul>
        <ContactForm onSubmit={ this._updateContact.bind(this) } contact={ this.state.contactSelected } keySelected={ this.state.keySelected }/>
      </div>
    );
  }
}


export default Contacts;
