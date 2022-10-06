import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {

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
    </div>
  );
}

export default Profile;
