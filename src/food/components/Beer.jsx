import React from 'react';
import { css } from 'emotion';

const imageStyle = css`
  max-width: 15%;

  @media (min-width: 992px) {
    max-width: 10%;
  }
`;

const Beer = ({ name, description, imageUrl }) => (
  <div>
    <h3>{name}</h3>
    <img className={imageStyle} src={imageUrl} alt="Beer suggested." />
    <p>{description}</p>
  </div>
);

export default Beer;
