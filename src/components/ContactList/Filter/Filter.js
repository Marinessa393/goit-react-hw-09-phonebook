import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../../redux/contacts/actions';
import { getFilter } from '../../../redux/contacts/selectors';
import s from './Filter.module.css';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = useCallback(
    e => {
      dispatch(changeFilter(e.target.value));
    },
    [dispatch],
  );
  return (
    <div className={s.Filter}>
      <TextField
        label="find by name.."
        variant="filled"
        multiline
        color="primary"
        fullWidth
        size="small"
        type="text"
        value={value}
        onChange={onChange}
      ></TextField>
    </div>
  );
}

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
