import React from 'react';
import PropTypes from 'prop-types';
import MissionRow from './MissionRow';
import './missions.css';

const MissionsTable = (props) => {
  const { missions } = props;

  return (
    <>
      { missions.map((mission) => <MissionRow key={mission.id} mission={mission} />)}
    </>
  );
};

MissionsTable.defaultProps = {
  missions: [],
};

MissionsTable.propTypes = {
  missions: PropTypes.instanceOf(Array),
};

export default MissionsTable;
