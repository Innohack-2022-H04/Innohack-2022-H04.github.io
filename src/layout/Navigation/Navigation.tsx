import styled from '@emotion/styled';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import SvgIcon from '@mui/material/SvgIcon';
import NavigationList from './NavigationList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  box-shadow: 1px 0 0 0 ${(p) => p.theme.palette.grey[300]};
  background-color: ${(p) => p.theme.palette.background.paper};
`;

const StyledListItemIcon = styled(ListItemIcon)`
  justify-content: center;
  min-width: 24px;
  padding: 4px;
  margin: ${(p) => p.theme.spacing(1)};
`;

export interface NavigationProps {
  display?: boolean;
}
function Navigation({
  display,
}: NavigationProps & typeof Navigation.defaultProps) {
  if (!display) {
    return <></>;
  }

  return (
    <Wrapper>
      <NavigationList />
      <StyledListItemIcon>
        <Tooltip
          title={`Version v${String(process.env.REACT_APP_VERSION)}`}
          placement="right"
        >
          <SvgIcon component={InfoIcon} />
        </Tooltip>
      </StyledListItemIcon>
    </Wrapper>
  );
}
Navigation.defaultProps = {
  display: true,
};

export default Navigation;
