import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import RocketItemsList from './rocketList';
import { fetchingRocketsInfo } from '../../redux/rockets/rockets';

let saveReserve = false;
const MyRockets = () => {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (saveReserve === false) {
      saveReserve = true;
      dispatch(fetchingRocketsInfo());
    }
  }, []);

  return (
    <Container>
      <RocketItemsList rockets={rockets} />
    </Container>

  );
};

export default MyRockets;
