import React from 'react';
import PropTypes from 'prop-types';

export default function Scroll({ children }) {
  return (
    <div style={{ overflowY: 'scroll', borderTop: '5px solid black', height: '800px' }}>
      {children}
    </div>
  );
}

Scroll.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
