import React, { Fragment } from 'react';
import { css } from 'emotion';
import Accordion from './Accordion';
import Beer from './Beer';

const accordionStyle = css`
  background-color: #fff;
  border: 1px #888 solid;
  border-radius: .25rem;
  box-shadow: 1px 1px;
  margin: 1rem .5rem;
  padding: 0 1rem;

  @media (min-width: 992px) {
    margin: 1rem auto;
    width: 31.25rem;
  }
`;

// TODO: send link from container...
const urifyLink = name => name.replace(/\s/g, '+');

const FoodList = ({ dishes }) => (
  <Fragment>
    {dishes &&
      dishes.map(({ id, name, beer }) => (
        <Accordion className={accordionStyle} title={name} key={id}>
          {open =>
            open ? (
              <Fragment>
                <h3><a href={`https://google.com/search?q=recipe+${urifyLink(name)}`} target="_blank" rel="noopener noreferrer">Recipe</a></h3>
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
