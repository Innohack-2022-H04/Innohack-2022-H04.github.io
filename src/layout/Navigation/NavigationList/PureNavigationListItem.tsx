import styled from '@emotion/styled';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { darken } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import { StyleConstants } from 'styles/StyleConstants';
import { CommonNavigationConfigProps as AppNavigationConfigProps } from 'layout/navigation-config';

const StyledListItemButton = styled(ListItemButton)<ListItemButtonProps>`
  justify-content: center;
  border-radius: 100%;
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  margin: ${(p) => p.theme.spacing(1)};
  color: ${(p) => p.theme.palette.grey[800]};

  &.Mui-selected {
    background-color: ${(p) => p.theme.palette.primary.main};
    color: ${(p) => p.theme.palette.primary.contrastText};
    &:hover {
      background-color: ${(p) =>
        darken(
          p.theme.palette.primary.main,
          p.theme.palette.tonalOffset as number,
        )};
    }
  }
`;

const StyledListItemIcon = styled(ListItemIcon)`
  padding: 4px;
  min-width: 24px;
  color: inherit;
`;

interface ListItemButtonProps {
  size: string;
}

export interface PureNavigationListItemProps extends AppNavigationConfigProps {
  onNavItemClick: (any) => void;
  selected: boolean;
}

function PureNavigationListItem({
  title,
  icon,
  onNavItemClick,
  selected,
}: PureNavigationListItemProps) {
  return (
    <StyledListItemButton
      onClick={onNavItemClick}
      selected={selected}
      size={StyleConstants.NAV_ICON_SIZE}
    >
      <StyledListItemIcon>
        <Tooltip title={title} placement="right">
          <SvgIcon component={icon} />
        </Tooltip>
      </StyledListItemIcon>
    </StyledListItemButton>
  );
}

export default PureNavigationListItem;
