import React from 'react';
import PropTypes from 'prop-types';
import RocketCardItem from './rocketCard';
import '../../Styles/rocketList.css';

const RocketItemsList = (props) => {
  const { rockets } = props;

  return (
    <ul className="card-holder">
      { rockets.map((rocket) => <RocketCardItem key={rocket.id} rocket={rocket} />)}
    </ul>
  );
};

RocketItemsList.defaultProps = {
  rockets: [],
};

RocketItemsList.propTypes = {
  rockets: PropTypes.instanceOf(Array),
};

export default RocketItemsList;
