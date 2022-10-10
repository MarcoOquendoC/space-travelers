import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../../redux/dragons';
import Dragon from './EachDragon';

const DragonsList = () => {
  const dragonsList = useSelector((state) => state.dragons);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!dragonsList.length) dispatch(getDragons());
  }, []);

  return (
    <>
      {
        dragonsList.map((dragon) => (
          <Dragon
            key={dragon.dragonsId}
            dragonId={dragon.dragonsId}
            type={dragon.type}
            name={dragon.name}
            flickrImages0={dragon.flickrImages0}
            dragonReserved={dragon.dragonReserved}
            description={dragon.description}
          />
        ))
      }
    </>
  );
};

export default DragonsList;
