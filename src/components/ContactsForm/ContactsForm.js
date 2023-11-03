import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import * as yup from 'yup';
import {
  StyledForm,
  Label,
  Input,
  Button,
  StyledErrorMessage,
} from './ContactsForm.styled';

const schema = yup.object().shape({
  name: yup.string().required('It is required field'),
  number: yup
    .string()
    .matches(
      /^\+?3?8?(0\d{9})$/,
      'Have to start with 380 or 0 and containe at least 10 symbols'
    )
    .required('It is required field'),
});

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmitForm = ({ name, number }, { resetForm }) => {
    const sameName = contacts.find(contact => contact.name === name);

    if (sameName) {
      return Notiflix.Notify.failure(
        'This contact is already in your phone book'
      );
    }

    dispatch(addContact(name, number));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmitForm}
      validationSchema={schema}
    >
      <StyledForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <ErrorMessage name="name">
            {msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
        </Label>

        <Label>
          Number
          <Input type="text" name="number" placeholder="Example: 0997755446" />
          <ErrorMessage name="number">
            {msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
