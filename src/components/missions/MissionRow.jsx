import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleJoinMission } from '../../redux/missions/missions';

const MissionRow = (props) => {
  const { mission } = props;
  const {
    id, name, description, joinStatus,
  } = mission;

  const dispatch = useDispatch();

  const toggleJoinEvent = (e) => {
    dispatch(toggleJoinMission(e.target.id.slice(1)));
  };

  return (
    <tr className="missionRow">
      <td className="missionName">{name}</td>
      <td className="missionInfo">{description}</td>
      <td className="missionStatus">
        { joinStatus ? (
          <span className="badge1">Active Member</span>
        ) : (
          <span className="badge2">Not a Member</span>
        )}
      </td>

      <td className="missionToggle">
        { joinStatus ? (
          <button id={`l${id}`} className={`missionBtn ${joinStatus ? 'badge3' : 'badge4'}`} type="button" onClick={toggleJoinEvent}>Leave Mission</button>
        ) : (
          <button id={`j${id}`} className={`missionBtn ${joinStatus ? 'badge3' : 'badge4'}`} type="button" onClick={toggleJoinEvent}>Join Mission</button>
        )}
      </td>
    </tr>
  );
};

MissionRow.defaultProps = {
  mission: {},
  id: '',
  name: '',
  description: '',
};

MissionRow.propTypes = {
  mission: PropTypes.instanceOf(Object),
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default MissionRow;
