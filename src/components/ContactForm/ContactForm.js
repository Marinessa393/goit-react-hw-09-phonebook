import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';
import { getAllContacts } from '../../redux/contacts/selectors';
import { Button, TextField } from '@material-ui/core';
import s from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    contact => {
      dispatch(addContact(contact));
    },
    [dispatch],
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      const isName = items.find(
        item => item.name.toLowerCase() === name.toLocaleLowerCase(),
      );
      const isNumber = items.find(item => item.number === number);

      if (isName || isNumber) {
        alert('contact is already in list');
        return;
      }

      onSubmit({ name, number });
      setName('');
      setNumber('');
    },
    [name, number, onSubmit, items],
  );

  return (
    <form className={s.form_edit} onSubmit={handleSubmit}>
      <h2>Create New Contact</h2>
      <TextField
        variant="outlined"
        type="text"
        name="name"
        value={name}
        onChange={event => setName(event.target.value)}
        required
        label="name"
        size="small"
        margin="normal"
        placeholder="James Oliver"
        inputProps={{
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          title:
            'Имя может состоять только из букв, апострофа, тире и пробелов',
        }}
      />
      <TextField
        variant="outlined"
        type="tel"
        name="number"
        value={number}
        onChange={event => setNumber(event.target.value)}
        label="number"
        required
        size="small"
        margin="normal"
        placeholder="0001234567"
        inputProps={{
          pattern: '[0-9]{10,12}',
          title:
            'Номер телефона должен состоять из 10-12 цифр и может содержать только цифры',
        }}
      />
      <Button
        variant="outlined"
        color="primary"
        type="submit"
        className={s.form_edit_btn}
      >
        Add contact
      </Button>
    </form>
  );
}

export default ContactForm;

// proptypes
ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onSubmit: PropTypes.func,
};
