import { ContactsForm } from 'components/ContactsForm';
import { ContactsList } from 'components/ContactsList';
import { useSelector } from 'react-redux';
import { Filter } from 'components/Filter';
import { getContacts } from 'redux/selectors';
import { Container, MainTitle, Title } from './App.syled';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <MainTitle>Phone book</MainTitle>
      <ContactsForm />
      <Title>Contacts</Title>
      <Filter />
      {contacts.length !== 0 && <ContactsList />}
    </Container>
  );
}
