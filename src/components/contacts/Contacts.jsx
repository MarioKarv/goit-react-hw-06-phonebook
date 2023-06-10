import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <ul className={css.ul}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id} className={css.li}>
            {name}: {number}
            <button
              className={css.button}
              type="button"
              onClick={() => onDelete(id)}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};