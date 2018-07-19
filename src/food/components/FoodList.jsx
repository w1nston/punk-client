import React, { Fragment } from 'react';
import { css } from 'emotion';
import Accordion from './Accordion';
import Beer from './Beer';

const accordionStyle = css`
  background-color: rgba(242, 246, 208, 0.1);
  border: 1px solid #333;
  border-radius: 4px;
  margin: 10px 0;
  padding: 20px 10px;

  @media (min-width: 992px) {
    margin: 10px auto;
    width: 500px;
  }
`;

const FoodList = ({ dishes }) => (
  <Fragment>
    {dishes &&
      dishes.map(({ id, name, beer }) => (
        <Accordion className={accordionStyle} title={name} key={id}>
          {open =>
            open ? (
              <Fragment>
                <h3>Beer suggestion</h3>
                {beer &&
                  beer.map(beer => (
                    <Beer
                      key={beer.id}
                      name={beer.name}
                      description={beer.description}
                      imageUrl={beer.imageUrl}
                    />
                  ))}
              </Fragment>
            ) : null
          }
        </Accordion>
      ))}
  </Fragment>
);

export default FoodList;
