import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import { IconButton, makeStyles } from '@material-ui/core';
import { Delete, Create } from '@material-ui/icons';
import TablePaginationActions from './Pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 320,
  },

  text: {
    color: '#fff',
  },
});

function ContactList() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const items = useSelector(getFilteredContacts);
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

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, items.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableBody>
            {(rowsPerPage > 0
              ? items.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage,
                )
              : items
            ).map(({ id, name, number }) => (
              <TableRow key={id}>
                <TableCell size="small" className={classes.text}>
                  {name}
                </TableCell>
                <TableCell size="small" className={classes.text}>
                  {number}
                </TableCell>
                {/* <TableCell padding="none" style={{ width: 48 }}>
                  <IconButton
                    type="button"
                    variant="contained"
                    className="ContactList__btn"
                    onClick={() => onDelete(id)}
                    color="primary"
                  >
                    <Create />
                  </IconButton>
                </TableCell> */}
                <TableCell padding="none" style={{ width: 48 }}>
                  <IconButton
                    type="button"
                    variant="contained"
                    className="ContactList__btn"
                    onClick={() => onDelete(id)}
                    color="secondary"
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter style={{ backgroundColor: '#34aa34' }}>
            <TableRow>
              <TablePagination
                // className={classes.text}
                rowsPerPageOptions={[5, 10]}
                colSpan={4}
                count={items.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                ActionsComponent={TablePaginationActions}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}

export default ContactList;

// proptypes
ContactList.propTypes = {
  items: PropTypes.array,
  onDelete: PropTypes.func,
};
