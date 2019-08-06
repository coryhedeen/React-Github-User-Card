import React from 'react';

const Card = props => {
  return (
    <div className="card">
    <div className="imgContainer">
      <img src={props.card.avatar_url} alt="profile pic"/>
    </div>
      <h2>{props.card.name}</h2>
      <h3>{props.card.location}</h3>
      <p>Public Repos: {props.card.public_repos}</p>
      <p>Followers: {props.card.followers}</p>
      <p>Following: {props.card.following}</p>
    </div>
  );
}

export default Card;
