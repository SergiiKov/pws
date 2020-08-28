import React from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';

import './TableRow.style.scss';

const Table = ({ data }) => (
  <table>
    <tbody className='tablebox-box'>
      {data.map((pair) => (
        <TableRow
          key={pair.label}
          label={pair.label}
          value={pair.value}
          link={pair.link}
        />
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    link: PropTypes.string,
  })).isRequired,
};

export default Table;
