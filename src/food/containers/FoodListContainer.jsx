import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import FoodList from '../components/FoodList';

const foodQuery = gql`
  query queryFood {
    dishes {
      id
      name
      beer {
        id
        name
        description
        imageUrl
      }
    }
  }
`;

class FoodListContainer extends Component {
  render() {
    return (
      <Query query={foodQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>;
          }

          if (error) {
            return <p>Error! {error}</p>;
          }

          return <FoodList dishes={data.dishes} />;
        }}
      </Query>
    );
  }
}

export default FoodListContainer;
