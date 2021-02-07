import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getLoading,
  getError,
  getFilteredContacts,
} from '../../redux/phonebook/phonebook-selectors';
import * as phonebookOperations from '../../redux/phonebook/phonebook-operations';
import s from '../ContactList/ContactList.module.css';
import Loader from 'react-loader-spinner';
import Error from '../Error/Error';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const visiableContacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => dispatch(phonebookOperations.fetchContacts()), [dispatch]);

  const onDeleteContact = id => dispatch(phonebookOperations.deleteContact(id));

  return (
    <>
      {visiableContacts.length > 0 && !error && (
        <ul className={s.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.allContacts}>
              <p>
                {name}: {number}
              </p>
              <button onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      {!visiableContacts.length && !error && !isLoading && (
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000} //3 secs
        />
      )}
      {error && <Error message={error.message} />}
    </>
  );
}
