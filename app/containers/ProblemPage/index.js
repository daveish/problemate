/**
 *
 * ProblemPage
 *
 */

import Avatar from 'material-ui/Avatar/Avatar';
import Typography from 'material-ui/Typography/Typography';
import React from 'react';
import styled from 'styled-components';
import Bullet from '../../components/Bullet/index';
import CardImage from '../../components/ProblemList/300x100.jpg';
import AvatarImage from '../../components/ProblemList/40x40.jpg';

const StyledAvatar = styled(Avatar)`
  background-color: #999999;
  width: 4rem !important;
  height: 4rem !important;
`;

const PostHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const PostImage = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  background-image: url("${CardImage}");
  padding-bottom: 12rem;
`;

const PostMetaInformation = styled.div`
  padding-left: 1rem;
  flex: 1;
`;

const StyledCardSubtitle = styled.ul`
  margin: 0;
  padding: 0.25rem 0 0;
`;

const StyledListItem = styled.li`
  display: inline-block;
  white-space: nowrap;
`;

const PostContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding: 1rem;
`;

export default class ProblemPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const bullet = <Bullet>•</Bullet>;

    return (
      <div>
        <PostImage src={CardImage} alt="Alternative Text" />

        <PostContainer>
          <PostHeader>
            <StyledAvatar src={AvatarImage} />

            <PostMetaInformation>
              <Typography>
                Perri Cotton
              </Typography>

              <Typography type="caption">
                <StyledCardSubtitle>
                  <StyledListItem>RubyCat</StyledListItem>
                  {bullet}
                  <StyledListItem>100 Aufrufe</StyledListItem>
                  {bullet}
                  <StyledListItem>vor 2 Minuten</StyledListItem>
                </StyledCardSubtitle>
              </Typography>
            </PostMetaInformation>
          </PostHeader>

          <article>
            <header>
              <h1>
                Device works but does not update
              </h1>
            </header>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
              et
              accusam et justo duo dolores et ea rebum.
            </p>

            <p>
              Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua.
              At vero eos et accusam et justo duo dolores et ea
              rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
              sit
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero
              eos
              et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>

            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat,
              vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
              nulla
              facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>

            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
              lobortis
              nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
              hendrerit
              in
              vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis
              at
              vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
              delenit augue duis dolore te feugait nulla facilisi.
            </p>

            <p>
              Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
              quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullam corper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat, vel illum dolore eu feugiat nulla facilisis.
            </p>

            <p>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren,
              no
              sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores
              et
              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
              sit
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam
              diam
              diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo
              labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata
              ut
              vero
              voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            </p>
          </article>
        </PostContainer>
      </div>
    );
  }
}
