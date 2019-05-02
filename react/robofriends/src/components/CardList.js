import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default function CardList({ robots }) {
  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
}

CardList.propTypes = {
  robots: PropTypes.arrayOf(PropTypes.object).isRequired,
};
