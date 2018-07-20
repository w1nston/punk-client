import React, { Fragment } from 'react';
import { css } from 'emotion';
import FoodListContainer from '../food/containers/FoodListContainer';

const dishesTitleStyle = css`
  margin: 3rem .5rem;
`;

const App = () => (
  <Fragment>
    <h1 className={dishesTitleStyle}>Dishes</h1>
    <FoodListContainer />
  </Fragment>
);

export default App;
