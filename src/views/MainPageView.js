import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  div: {
    width: '60%',
    borderRadius: '20px',
    backgroundColor: '#f5f5f5b6',
    padding: '40px',
    margin: '30px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  h1: {
    textAlign: 'center',
    color: 'blue',
    margin: 0,
  },

  strong: {
    textAlign: 'center',
    marginTop: 30,
    color: 'orange',
    fontSize: 30,
    fontWeight: 700,
  },
};

const MainPageView = () => {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>Hello everybody, my name is Verka Serdyuchka</h1>
      <p style={styles.strong}>Let`s begin to dance!</p>
      <NavLink
        to="/login"
        exact
        className="mainpage_btn"
        activeClassName="mainpage_activeBtn"
      >
        Open my Phonebook
      </NavLink>
    </div>
  );
};

export default MainPageView;
