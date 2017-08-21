/**
 *
 * ProblemCard
 *
 */

import Avatar from 'material-ui/Avatar/Avatar';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import Typography from 'material-ui/Typography/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 0.625rem;
`;

const StyledCardMedia = styled(CardMedia)`
  background-color: #bcbcbc;
  background-position: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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

const CardMediaWrapper = styled.div`
  position: relative;
  padding-bottom: 40%;
`;

class ProblemCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const bullet = <Bullet>•</Bullet>;

    return (
      <StyledCard>
        <CardMediaWrapper>
          <StyledCardMedia image={this.props.image} title={this.props.imageAlternative} />
        </CardMediaWrapper>
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
