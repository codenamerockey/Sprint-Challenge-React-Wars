import React from "react";
import { Card, Grid } from "semantic-ui-react";

const StarwarsCard = props => {
  return (
    <Grid.Column padded key={props.id}>
      <Card>
        <Card.Content>
          <Card.Header>Star Wars Character: {props.name}</Card.Header>
          <Card.Description>{props.gender}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default StarwarsCard;
