import React from 'react';

const Card = props => {
  return (
    <div className="card">

      <img src={props.card.avatar_url} alt="profile pic"/>
    <div className="text">
      <h2>{props.card.name}</h2>
      <h3>{props.card.location}</h3>
      <h3>{props.card.login}</h3>
    </div>
    </div>
  );
}

export default Card;
