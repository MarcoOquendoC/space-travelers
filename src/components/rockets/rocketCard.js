import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rockets';
import '../../Styles/rocketList.css';

const RocketCardItem = (props) => {
  const { rocket } = props;
  const {
    images, name, description, reserved, id,
  } = rocket;

  const dispatch = useDispatch();

  const reserveClickEvent = (e) => {
    dispatch(reserveRocket(e.target.id));
  };

  return (
    <li id={id} className="card">
      <div className="img-holder">
        <img src={images} alt="Rocket SpaceX" className="rocket-img" />
      </div>
      <div className="info-holder">
        <h3>{ name }</h3>

        {!reserved ? (
          <>
            <p>{description}</p>
            <Button id={id} type="button" className="btn-reserve" onClick={(e) => reserveClickEvent(e)}>Reserve Rocket</Button>
          </>
        ) : (
          <>
            <p>
              <Badge className="reserved">Reserved</Badge>
              {description}
            </p>
            <Button id={id} type="button" className="btn-cancel" onClick={reserveClickEvent}>Cancel Reservation</Button>
          </>
        )}
      </div>
    </li>
  );
};

RocketCardItem.defaultProps = {
  rocket: {},
  name: '',
  description: '',
  images: '',
};

RocketCardItem.propTypes = {
  rocket: PropTypes.instanceOf(Object),
  name: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.string,
};

export default RocketCardItem;
