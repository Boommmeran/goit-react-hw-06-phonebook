import { Contact } from 'components/Contact';
import { StyledList } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  
  const normalizedFilter = filterValue.toLowerCase();
  const getVisibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <StyledList>
      {getVisibleContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          id={id}
          deleteContact={() => dispatch(deleteContact(id))}
        />
      ))}
    </StyledList>
  );
};
