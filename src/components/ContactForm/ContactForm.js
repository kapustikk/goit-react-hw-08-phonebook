import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';
import * as phonebookOperations from '../../redux/phonebook/phonebook-operations';
import s from '../ContactForm/ContactForm.module.css';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = (name, number) =>
    dispatch(phonebookOperations.addContact(name, number));

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setName('');
    setNumber('');

    if (contactMatch()) {
      return;
    }

    onSubmit(name, number);
  };

  const contactMatch = () => {
    const nameMatch = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );
    const numberMatch = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );

    if (nameMatch.includes(name) || numberMatch.includes(number)) {
      alert(`${name} is already in contacts`);
      return true;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          className={s.input}
        ></input>
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.currentTarget.value)}
          className={s.input}
        ></input>
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}
