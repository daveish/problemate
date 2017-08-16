/**
 *
 * ProblemCard
 *
 */

import { Avatar, Card, CardHeader, CardMedia, Typography } from 'material-ui';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 0.625rem;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 100px;
  background-color: #bcbcbc;
`;

const StyledCardSubtitle = styled.ul`
  margin: 0;
  padding: 0.25rem 0 0;
`;

const StyledListItem = styled.li`
  display: inline-block;
  white-space: nowrap;
`;

const Bullet = styled.span`
  display: inline-block;
  margin: 0 0.25rem;
`;

const StyledAvatar = styled(Avatar)`
  background-color: #bcbcbc;
`;

class ProblemCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const bullet = <Bullet>•</Bullet>;
    return (
      <StyledCard>
        <StyledCardMedia image={this.props.image} title={this.props.imageAlternative} />
        <CardHeader
          title={<Typography>{this.props.title}</Typography>}
          subheader={
            <StyledCardSubtitle>
              <Typography type="caption">
                <StyledListItem>{this.props.author}</StyledListItem>
                {bullet}
                <StyledListItem>{this.props.upvotes} Feel you</StyledListItem>
                {bullet}
                <StyledListItem>{this.props.created}</StyledListItem>
              </Typography>
            </StyledCardSubtitle>
          }
          avatar={
            <StyledAvatar src={this.props.avatar} />
          }
        />
      </StyledCard>
    );
  }
}

ProblemCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlternative: PropTypes.string.isRequired,
  upvotes: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
};

export default ProblemCard;
