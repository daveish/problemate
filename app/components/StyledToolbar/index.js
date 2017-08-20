import Toolbar from 'material-ui/Toolbar/Toolbar';
import styled from 'styled-components';

const StyledToolbar = styled(Toolbar)`
  &[class*=MuiToolbar-gutters] {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export default StyledToolbar;
