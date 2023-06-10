import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css'

const Filter = ({ onFilter }) => {
    return (
      <input
        className={css.input}
        type="text"
        name="name"
        placeholder="Enter name for search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={e => onFilter(e.target.value)}
      />
    );
}

export default Filter;
Filter.propTypes = { onFilter: PropTypes.func };