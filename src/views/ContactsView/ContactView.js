import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container/Container';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import { fetchContacts } from '../../redux/phonebook/phonebook-operations';
import s from '../ContactsView/ContactsView.module.css';

export default function ContactView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      <Container>
        <div className={s.wrapper}>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </Container>
    </>
  );
}
