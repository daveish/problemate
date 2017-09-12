/**
 *
 * PostPreview
 *
 */

import Avatar from 'material-ui/Avatar/Avatar';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import Typography from 'material-ui/Typography/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Bullet from '../Bullet/index';
import { postProp } from '../Post/propTypes';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledCard = styled(Card)`
  margin: 0.625rem;
  overflow: hidden;
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

const StyledList = styled.ul`
  margin: 0;
  padding: 0.25rem 0 0;
`;

const StyledListItem = styled.li`
  display: inline-block;
  white-space: nowrap;
`;

const StyledAvatar = styled(Avatar)`
  background-color: #bcbcbc;
`;

const CardMediaWrapper = styled.div`
  position: relative;
  padding-bottom: 8rem;
`;

export default class PostPreview extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const bullet = <Bullet>•</Bullet>;

    return (
      <StyledLink to={`/user/${this.props.post.author}/post/${this.props.post.id}`}>
        <StyledCard>
          <CardMediaWrapper>
            <StyledCardMedia
              image={this.props.post.image}
              title={this.props.post.imageAlternative}
            />
          </CardMediaWrapper>
          <CardHeader
            title={<Typography>{this.props.post.title}</Typography>}
            subheader={
              <Typography type="caption">
                <StyledList>
                  <StyledListItem>{this.props.post.author}</StyledListItem>
                  {bullet}
                  <StyledListItem>{this.props.post.viewCount} Aufrufe</StyledListItem>
                  {bullet}
                  <StyledListItem>{this.props.post.created}</StyledListItem>
                </StyledList>
              </Typography>
            }
            avatar={
              <StyledAvatar src={this.props.post.avatar} />
            }
          />
        </StyledCard>
      </StyledLink>
    );
  }
}

PostPreview.propTypes = {
  post: postProp.isRequired,
};
