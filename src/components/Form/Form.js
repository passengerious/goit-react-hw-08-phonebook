import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { getContacts } from 'redux/phonebook/phonebook-selectors';
import * as phonebookOperations from 'redux/phonebook/phonebook-operations';
import s from './Form.module.css';

export default function MyForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onSubmit = (name, number) =>
    dispatch(phonebookOperations.addContact(name, number));

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactMatching = () => {
    const namesInPhonebook = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );

    const numbersInPhonebook = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );

    if (
      namesInPhonebook.includes(name) ||
      numbersInPhonebook.includes(number)
    ) {
      alert(`${name}${number} is already in contacts`);
      return true;
    }

    if (name === '' || number === '') {
      alert('Please enter all data');
      return true;
    }
  };     

  const isName = name => {
    const check = /^[A-Za-z]+$/;
    if(name.search(check)) {
    return true;
    };
  };

  const onKeyLetter = e => {
    e = (e) ? e : window.event;
    const charCode  = (e.which) ? e.which : e.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 123) && (charCode !== 32)) {
      return alert('Please input alphabet characters only');
    }
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    setName('');
    setNumber('');

    if (contactMatching()) {
      return;
    }

    if (isName(name) === true) {
      return alert('Only alphabet characters allowed in NameForm');;
    }

    onSubmit(name, number);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter your name"
          onChange={e => setName(e.currentTarget.value)}
          onKeyPress={onKeyLetter} 
          className={s.input}
        />
      </label>
      <label>
        Number
        <PhoneInput
          country={'us'}
          value={number}
          placeholder="10664888778"
          onChange={setNumber}
        />
      </label>
      <div className={s.buttonWrapper}>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </div>
    </form>
  );
}
