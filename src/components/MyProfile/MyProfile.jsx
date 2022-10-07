import React from 'react';
import { useSelector } from 'react-redux';
import './myProfile.css';

function MyProfile() {
  // rockets
  const ourRockets = useSelector((state) => state.rockets);
  const reservedRockets = ourRockets.filter((rocket) => rocket.reserved);

  const listReservedRockets = reservedRockets.map((reservedRocket) => (
    <tbody key={reservedRocket.id}>
      <tr>
        <td>
          {reservedRocket.name}
        </td>
      </tr>
    </tbody>
  ));

  // Missions
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.joinStatus);

  const listJoinedMissions = joinedMissions.map((joinedMission) => (
    <tbody key={joinedMission.id}>
      <tr>
        <td>
          {joinedMission.name}
        </td>
      </tr>
    </tbody>
  ));

  // Dragons
  const dragons = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.dragonReserved);

  const listReservedDragons = reservedDragons.map((reservedDragon) => (
    <tbody key={reservedDragon.dragonId}>
      <tr>
        <td>
          {reservedDragon.name}
        </td>
      </tr>
    </tbody>
  ));

  return (
    <div className="profiles">
      <div>
        <h2>My Rockets</h2>
        <table className="table table-bordered width300">{listReservedRockets}</table>
      </div>
      <div>
        <h2>My Missions</h2>
        <table className="table table-bordered width300">{listJoinedMissions}</table>
      </div>
      <div>
        <h2>My Dragons</h2>
        <table className="table table-bordered width300">{listReservedDragons}</table>
      </div>
    </div>
  );
}

export default MyProfile;
