/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Card, CardHeader, CardMedia } from 'material-ui';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 0 0 1rem 0;
`;

const StyledCardHeader = styled(CardHeader)`
  div {
    padding-right: 0 !important;
  }
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <StyledCard>
          <CardMedia>
            <img src="http://lorempixel.com/300/160/technics" alt="" />
          </CardMedia>
          <StyledCardHeader
            title={'Device works but does not update'}
            subtitle={'RubyCat - 100 Feel you - vor 2 Minuten'}
            avatar="http://lorempixel.com/40/40/people"
          />
        </StyledCard>
        <StyledCard>
          <CardMedia>
            <img src="http://lorempixel.com/300/160/technics" alt="" />
          </CardMedia>
          <StyledCardHeader
            title={'Device is never working'}
            subtitle={'RubyCat - 2 Tsd. Feel you - Gestern'}
            avatar="http://lorempixel.com/40/40/people"
          />
        </StyledCard>
        <StyledCard>
          <CardMedia>
            <img src="http://lorempixel.com/300/160/sports" alt="" />
          </CardMedia>
          <StyledCardHeader
            title={'Sports at school sucks!!'}
            subtitle={'nerd1101 - 2 Tsd. Feel you - vor 1 Monat'}
            avatar="http://lorempixel.com/40/40/animals"
          />
        </StyledCard>
        <StyledCard>
          <CardMedia>
            <img src="http://lorempixel.com/300/160/animals" alt="" />
          </CardMedia>
          <StyledCardHeader
            title={'My pet is not eating'}
            subtitle={'nerd1101 - 2 Tsd. Feel you - vor 2 Monaten'}
            avatar="http://lorempixel.com/40/40/abstract"
          />
        </StyledCard>
        <StyledCard>
          <CardMedia>
            <img src="http://lorempixel.com/300/160/business" alt="" />
          </CardMedia>
          <StyledCardHeader
            title={'No success in the job'}
            subtitle={'GlobeTrotter - 2 Tsd. Feel you - vor 4 Monaten'}
            avatar="http://lorempixel.com/40/40/animals"
          />
        </StyledCard>
        <StyledCard>
          <CardMedia>
            <img src="http://lorempixel.com/300/160/technics" alt="" />
          </CardMedia>
          <StyledCardHeader
            title={'Device switching off automatically'}
            subtitle={'RubyCat - 1 Tsd. Feel you - vor 1 Jahr'}
            avatar="http://lorempixel.com/40/40/people"
          />
        </StyledCard>
      </div>
    );
  }
}
