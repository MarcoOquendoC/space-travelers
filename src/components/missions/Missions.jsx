import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionsTable from './MissionsTable';
import { fetchingMissionsInfo } from '../../redux/missions/missions';

let saveJoin = false;

const Missions = () => {
  const missions = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (saveJoin === false) {
      saveJoin = true;
      dispatch(fetchingMissionsInfo());
    }
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr className="missionRow">
          <th className="missionName">Mission</th>
          <th className="missionInfo">Description</th>
          <th className="missionStatus">Status</th>
          <th className="missionToggle">Action</th>
        </tr>
      </thead>
      <tbody>
        <MissionsTable missions={missions} />
      </tbody>
    </table>
  );
};

export default Missions;
