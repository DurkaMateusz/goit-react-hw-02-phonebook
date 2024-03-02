import React, { Component } from 'react';
import styles from "./ContactForm.module.css"
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
    state = {
        name: '',
    }

    loginInputId = nanoid();

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
      };

    handleSubmit = evt => {
        evt.preventDefault();
        const newContact = {
            id: nanoid(),
          name: this.state.name,
        }
    
        if (this.props.onAddContact) {
            this.props.onAddContact(newContact);
          }
        }
    
    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit} className={styles.form}>
              <div className={styles.inputWrapper}>
              <label>
            Name
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="[a-zA-Z \-']{2,30}"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              required
            />
          </label>
              </div>
    
              <button type="submit">Add contact</button>
            </form>
          </div>
        );
      }
}