import React from 'react';
import { useSelector } from 'react-redux';
import './myProfile.css';

function MyProfile() {
  // rockets
  const ourRockets = useSelector((state) => state.rockets);
  const rocketsReserve = ourRockets.filter((rocket) => rocket.reserved === true);

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
        <h2>My Dragons</h2>
        <table className="table table-bordered">{listReservedDragons}</table>
      </div>
      <div className="rockets">
        <h2>My Rockets</h2>
        <div className="profile">
          {
            rocketsReserve.map((rocket) => (
              <div key={rocket.id} className="item">
                <p>{rocket.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
