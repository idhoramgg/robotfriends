import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2 className="tc">{name}</h2>
        <p className="tc">{email}</p>
      </div>
    </div>
  );
};

export default Card;
