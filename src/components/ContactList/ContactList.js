import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';
import {
  getFilteredContacts,
  getLoading,
} from '../../redux/contacts/selectors';
import s from './ContactList.module.css';
import { Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

function ContactList() {
  const items = useSelector(getFilteredContacts);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  const onDelete = useCallback(
    id => {
      dispatch(deleteContact(id));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p className="loading">Loading...</p>}

      {items.length > 0 && (
        <ul className={s.ContactList}>
          {items.map(({ id, name, number }) => (
            <li key={id}>
              <p className={s.contact_name}>{name}</p>
              <p>{number}</p>
              <Button
                type="button"
                className="ContactList__btn"
                onClick={() => onDelete(id)}
                color="primary"
                variant="contained"
              >
                <Delete />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ContactList;

// proptypes
ContactList.propTypes = {
  items: PropTypes.array,
  onDelete: PropTypes.func,
};
